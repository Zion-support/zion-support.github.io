import React, { useState, useRef } from 'react';
import { 
  Download, 
  FileText, 
  Calculator, 
  Calendar, 
  User, 
  Building, 
  DollarSign,
  Plus,
  Trash2,
  Save,
  Send,
  Eye,
  Edit3,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface InvoiceData {
  invoiceNumber: string;
  date: string;
  dueDate: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  companyName: string;
  companyAddress: string;
  companyEmail: string;
  companyPhone: string;
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
  notes: string;
}

const AIInvoiceGenerator: React.FC = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    companyName: 'Zion Tech Group',
    companyAddress: '364 E Main St STE 1008, Middletown DE 19709',
    companyEmail: 'kleber@ziontechgroup.com',
    companyPhone: '+1 302 464 0950',
    items: [
      { id: '1', description: '', quantity: 1, rate: 0, amount: 0 }
    ],
    subtotal: 0,
    taxRate: 8.5,
    taxAmount: 0,
    total: 0,
    notes: 'Thank you for your business!'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const invoiceRef = useRef<HTMLDivElement>(null);

  const calculateAmounts = (items: InvoiceItem[]) => {
    const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
    const taxAmount = (subtotal * invoiceData.taxRate) / 100;
    const total = subtotal + taxAmount;
    
    setInvoiceData(prev => ({
      ...prev,
      items,
      subtotal,
      taxAmount,
      total
    }));
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    };
    calculateAmounts([...invoiceData.items, newItem]);
  };

  const removeItem = (id: string) => {
    const updatedItems = invoiceData.items.filter(item => item.id !== id);
    calculateAmounts(updatedItems);
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    const updatedItems = invoiceData.items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = updatedItem.quantity * updatedItem.rate;
        }
        return updatedItem;
      }
      return item;
    });
    calculateAmounts(updatedItems);
  };

  const generateAISuggestions = async () => {
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setAiSuggestions([
        'Web Development Services - $150/hour',
        'AI Consultation - $200/hour',
        'System Integration - $300/hour',
        'Technical Support - $100/hour',
        'Project Management - $120/hour'
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  const downloadPDF = () => {
    // In a real implementation, this would generate and download a PDF
    alert('PDF download functionality would be implemented here with a library like jsPDF');
  };

  const sendInvoice = () => {
    // In a real implementation, this would send the invoice via email
    alert('Email sending functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold cyber-text mb-4">
              AI Invoice Generator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create professional invoices instantly with AI-powered suggestions and automated calculations
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="futuristic-card text-center">
              <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">10,000+</div>
              <div className="text-gray-400">Invoices Generated</div>
            </div>
            <div className="futuristic-card text-center">
              <Calculator className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">$2.5M+</div>
              <div className="text-gray-400">Total Revenue</div>
            </div>
            <div className="futuristic-card text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="futuristic-card text-center">
              <Clock3 className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">2min</div>
              <div className="text-gray-400">Avg. Generation Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Invoice Form */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="futuristic-card">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 text-cyan-400" />
                Company Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={invoiceData.companyName}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, companyName: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="text"
                    value={invoiceData.companyPhone}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, companyPhone: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                  <input
                    type="text"
                    value={invoiceData.companyAddress}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, companyAddress: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="futuristic-card">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-purple-400" />
                Client Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Client Name</label>
                  <input
                    type="text"
                    value={invoiceData.clientName}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, clientName: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="Enter client name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={invoiceData.clientEmail}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, clientEmail: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="client@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                  <input
                    type="text"
                    value={invoiceData.clientAddress}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, clientAddress: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="Client address"
                  />
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="futuristic-card">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-pink-400" />
                Invoice Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Invoice #</label>
                  <input
                    type="text"
                    value={invoiceData.invoiceNumber}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, invoiceNumber: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    value={invoiceData.date}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
                  <input
                    type="date"
                    value={invoiceData.dueDate}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, dueDate: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="futuristic-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-green-400" />
                  AI-Powered Suggestions
                </h3>
                <button
                  onClick={generateAISuggestions}
                  disabled={isGenerating}
                  className="neon-button text-sm"
                >
                  {isGenerating ? 'Generating...' : 'Get AI Suggestions'}
                </button>
              </div>
              
              {aiSuggestions.length > 0 && (
                <div className="space-y-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-3 bg-slate-800 border border-gray-600 rounded-lg cursor-pointer hover:border-cyan-400 transition-colors"
                      onClick={() => {
                        const [description, rate] = suggestion.split(' - $');
                        const newItem: InvoiceItem = {
                          id: Date.now().toString(),
                          description,
                          quantity: 1,
                          rate: parseFloat(rate?.replace('/hour', '') || '0'),
                          amount: parseFloat(rate?.replace('/hour', '') || '0')
                        };
                        calculateAmounts([...invoiceData.items, newItem]);
                      }}
                    >
                      <div className="text-white font-medium">{suggestion}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Invoice Preview */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white hover:border-cyan-400 transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                {previewMode ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={downloadPDF}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
              <button
                onClick={sendInvoice}
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Invoice
              </button>
            </div>

            {/* Invoice Preview */}
            <div ref={invoiceRef} className="futuristic-card bg-white text-black">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{invoiceData.companyName}</h2>
                  <p className="text-gray-600">{invoiceData.companyAddress}</p>
                  <p className="text-gray-600">{invoiceData.companyEmail}</p>
                  <p className="text-gray-600">{invoiceData.companyPhone}</p>
                </div>
                <div className="text-right">
                  <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
                  <p className="text-gray-600">#{invoiceData.invoiceNumber}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bill To:</h3>
                  <p className="text-gray-600">{invoiceData.clientName}</p>
                  <p className="text-gray-600">{invoiceData.clientEmail}</p>
                  <p className="text-gray-600">{invoiceData.clientAddress}</p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Date:</p>
                      <p className="font-medium">{new Date(invoiceData.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Due Date:</p>
                      <p className="font-medium">{new Date(invoiceData.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Description</th>
                      <th className="text-right py-2 font-semibold text-gray-900">Qty</th>
                      <th className="text-right py-2 font-semibold text-gray-900">Rate</th>
                      <th className="text-right py-2 font-semibold text-gray-900">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.items.map((item, index) => (
                      <tr key={item.id} className="border-b border-gray-100">
                        <td className="py-2">
                          {previewMode ? (
                            item.description
                          ) : (
                            <input
                              type="text"
                              value={item.description}
                              onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                              placeholder="Item description"
                            />
                          )}
                        </td>
                        <td className="py-2 text-right">
                          {previewMode ? (
                            item.quantity
                          ) : (
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm text-right"
                              min="0"
                            />
                          )}
                        </td>
                        <td className="py-2 text-right">
                          {previewMode ? (
                            `$${item.rate.toFixed(2)}`
                          ) : (
                            <input
                              type="number"
                              value={item.rate}
                              onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                              className="w-24 px-2 py-1 border border-gray-300 rounded text-sm text-right"
                              min="0"
                              step="0.01"
                            />
                          )}
                        </td>
                        <td className="py-2 text-right">
                          ${item.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex justify-end">
                <div className="w-64">
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${invoiceData.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Tax ({invoiceData.taxRate}%):</span>
                    <span className="font-medium">${invoiceData.taxAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-gray-200 font-bold text-lg">
                    <span>Total:</span>
                    <span>${invoiceData.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes:</label>
                {previewMode ? (
                  <p className="text-gray-600">{invoiceData.notes}</p>
                ) : (
                  <textarea
                    value={invoiceData.notes}
                    onChange={(e) => setInvoiceData(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    rows={3}
                    placeholder="Additional notes..."
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInvoiceGenerator;