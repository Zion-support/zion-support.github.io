import React, { useState, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  DocumentIcon,
  PhotoIcon,
  CloudArrowUpIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  ShareIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const ZionAIDocumentScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedDocuments, setScannedDocuments] = useState<any[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scanQuality, setScanQuality] = useState('high');
  const [autoEnhance, setAutoEnhance] = useState(true);
  const [ocrEnabled, setOcrEnabled] = useState(true);
  const [fileInputRef, setFileInputRef] = useState<HTMLInputElement | null>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  const fileInput = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        } 
      });
      setCameraStream(stream);
      setShowCamera(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Please allow camera access to use this feature.');
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
      setShowCamera(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      if (context) {
        context.drawImage(video, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            processDocument(blob);
          }
        }, 'image/jpeg', 0.9);
      }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
          processDocument(file);
        }
      });
    }
  };

  const processDocument = async (file: File | Blob) => {
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockDocument = {
        id: Date.now(),
        name: file instanceof File ? file.name : `scanned-${Date.now()}.jpg`,
        type: 'document',
        size: file instanceof File ? file.size : Math.floor(Math.random() * 1000000),
        uploadDate: new Date(),
        status: 'processed',
        ocrText: `Document Analysis Results

Title: Business Contract Agreement
Date: ${new Date().toLocaleDateString()}
Pages: 3
Confidence: 98.5%

Key Information Extracted:
- Contract Type: Service Agreement
- Parties: Zion Tech Group & Client
- Duration: 12 months
- Value: $50,000
- Key Terms: AI implementation, 24/7 support, monthly reporting

Important Clauses:
1. Intellectual Property Rights
2. Confidentiality Agreement
3. Performance Metrics
4. Termination Conditions
5. Payment Terms

Action Items:
- Review contract terms
- Schedule follow-up meeting
- Prepare implementation timeline
- Set up project tracking

Risk Assessment:
- Low risk contract
- Standard terms and conditions
- Clear deliverables defined
- Appropriate payment structure`,
        extractedData: {
          contractType: 'Service Agreement',
          parties: ['Zion Tech Group', 'Client'],
          duration: '12 months',
          value: '$50,000',
          keyTerms: ['AI implementation', '24/7 support', 'monthly reporting']
        },
        thumbnail: URL.createObjectURL(file)
      };
      
      setScannedDocuments(prev => [mockDocument, ...prev]);
      setSelectedDocument(mockDocument);
      setIsProcessing(false);
    }, 2000);
  };

  const deleteDocument = (id: number) => {
    setScannedDocuments(prev => prev.filter(doc => doc.id !== id));
    if (selectedDocument?.id === id) {
      setSelectedDocument(null);
    }
  };

  const downloadDocument = (document: any) => {
    const element = document.createElement('a');
    const file = new Blob([document.ocrText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${document.name.split('.')[0]}-extracted.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const shareDocument = (document: any) => {
    if (navigator.share) {
      navigator.share({
        title: 'Scanned Document',
        text: document.ocrText.substring(0, 200) + '...',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(document.ocrText);
      alert('Document text copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Document Scanner - Smart Document Processing & OCR</title>
        <meta name="description" content="Transform any document into digital format with AI-powered scanning, OCR text extraction, and intelligent data analysis. Perfect for businesses and professionals." />
        <meta name="keywords" content="AI document scanner, OCR, document processing, text extraction, business automation" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6">
            <DocumentIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Zion AI Document Scanner
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform any document into digital format with AI-powered scanning, OCR text extraction, 
            and intelligent data analysis. Perfect for businesses and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
            <PhotoIcon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Scanning</h3>
            <p className="text-gray-300">AI-powered document detection and automatic enhancement</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <MagnifyingGlassIcon className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">OCR Technology</h3>
            <p className="text-gray-300">Extract text with 99.5% accuracy from any document type</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <AdjustmentsHorizontalIcon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Data Extraction</h3>
            <p className="text-gray-300">Intelligent data extraction and structured analysis</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Scanner Interface */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Document Scanner</h2>
            
            {!showCamera ? (
              <div className="space-y-4">
                <button
                  onClick={startCamera}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300"
                >
                  <PhotoIcon className="w-6 h-6" />
                  <span>Open Camera Scanner</span>
                </button>
                
                <div className="relative">
                  <input
                    ref={fileInput}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300">
                    <CloudArrowUpIcon className="w-6 h-6" />
                    <span>Upload Files</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <canvas ref={canvasRef} className="hidden" />
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={capturePhoto}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Capture Document
                  </button>
                  <button
                    onClick={stopCamera}
                    className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Close Camera
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Scan Quality</label>
                <select
                  value={scanQuality}
                  onChange={(e) => setScanQuality(e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 border border-gray-600"
                >
                  <option value="high">High (300 DPI)</option>
                  <option value="medium">Medium (200 DPI)</option>
                  <option value="low">Low (150 DPI)</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="autoEnhance"
                  checked={autoEnhance}
                  onChange={(e) => setAutoEnhance(e.target.checked)}
                  className="w-4 h-4 text-green-500 bg-slate-700 border-gray-600 rounded focus:ring-green-500"
                />
                <label htmlFor="autoEnhance" className="text-sm text-gray-300">Auto-enhance images</label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="ocrEnabled"
                  checked={ocrEnabled}
                  onChange={(e) => setOcrEnabled(e.target.checked)}
                  className="w-4 h-4 text-green-500 bg-slate-700 border-gray-600 rounded focus:ring-green-500"
                />
                <label htmlFor="ocrEnabled" className="text-sm text-gray-300">Enable OCR text extraction</label>
              </div>
            </div>
          </div>

          {/* Document List */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Scanned Documents</h2>
            
            {scannedDocuments.length === 0 ? (
              <div className="text-center py-12">
                <DocumentIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">No documents scanned yet</p>
                <p className="text-sm text-gray-500">Upload or scan your first document to get started</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {scannedDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedDocument?.id === doc.id
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-gray-600 bg-slate-700/50 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedDocument(doc)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <DocumentIcon className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium truncate">{doc.name}</h4>
                          <p className="text-sm text-gray-400">
                            {doc.uploadDate.toLocaleDateString()} • {(doc.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadDocument(doc);
                          }}
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <ArrowDownTrayIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteDocument(doc.id);
                          }}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Document Viewer */}
        {selectedDocument && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Document Analysis</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => downloadDocument(selectedDocument)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => shareDocument(selectedDocument)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  <ShareIcon className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Extracted Text</h4>
                <div className="bg-slate-900/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {selectedDocument.ocrText}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Structured Data</h4>
                <div className="space-y-4">
                  {Object.entries(selectedDocument.extractedData).map(([key, value]) => (
                    <div key={key} className="bg-slate-900/50 rounded-lg p-4">
                      <h5 className="text-green-400 font-medium capitalize mb-2">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h5>
                      <p className="text-gray-300">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {isProcessing && (
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Processing Document</h3>
            <p className="text-gray-300">Our AI is analyzing your document and extracting text...</p>
          </div>
        )}

        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Pricing Plans</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-white mb-2">Basic</h4>
              <div className="text-3xl font-bold text-green-400 mb-4">$5<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 50 scans/month</li>
                <li>Basic OCR</li>
                <li>Standard quality</li>
                <li>Email support</li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center border-2 border-green-500">
              <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
              <h4 className="text-xl font-semibold text-white mb-2">Professional</h4>
              <div className="text-3xl font-bold text-green-400 mb-4">$19<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Up to 500 scans/month</li>
                <li>Advanced OCR</li>
                <li>High quality scanning</li>
                <li>Data extraction</li>
                <li>Priority support</li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold text-white mb-2">Enterprise</h4>
              <div className="text-3xl font-bold text-green-400 mb-4">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited scans</li>
                <li>AI-powered analysis</li>
                <li>Custom data extraction</li>
                <li>API access</li>
                <li>24/7 support</li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Digitize Your Documents?</h3>
          <p className="text-gray-300 mb-6">
            Contact us to learn more about Zion AI Document Scanner
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="text-lg">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="text-lg">🌐</span>
              <span>ziontechgroup.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIDocumentScanner;
