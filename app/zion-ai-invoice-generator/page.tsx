import React, { useState, useRef } from 'react';
import { FileText, Download, Send, Plus, Trash2, Edit3, Save, Loader2, CheckCircle, DollarSign, Calendar, User, Building2 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIInvoiceGenerator = () => {
  const [invoice, setInvoice] = useState({
    id: `INV-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    client: {
      name: '',
      email: '',
      address: '',
      phone: ''
    },
    company: {
      name: 'Zion Tech Group',
      email: 'kleber@ziontechgroup.com',
      address: '364 E Main St STE 1008, Middletown DE 19709',
      phone: '+1 302 464 0950'
    },
    items: [
      { id: 1, description: '', quantity: 1, rate: 0, amount: 0 }
    ],
    subtotal: 0,
    tax: 0,
    total: 0,
    notes: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const calculateAmounts = (items: any[]) => {
    const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const updateItem = (id: number, field: string, value: any) => {
    const updatedItems = invoice.items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'rate') {
          updatedItem.amount = updatedItem.quantity * updatedItem.rate;
        }
        return updatedItem;
      }
      return item;
    });
    
    const amounts = calculateAmounts(updatedItems);
    setInvoice(prev => ({
      ...prev,
      items: updatedItems,
      ...amounts
    }));
  };

  const addItem = () => {
    const newId = Math.max(...invoice.items.map(item => item.id)) + 1;
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, { id: newId, description: '', quantity: 1, rate: 0, amount: 0 }]
    }));
  };

  const removeItem = (id: number) => {
    if (invoice.items.length > 1) {
      const updatedItems = invoice.items.filter(item => item.id !== id);
      const amounts = calculateAmounts(updatedItems);
      setInvoice(prev => ({
        ...prev,
        items: updatedItems,
        ...amounts
      }));
    }
  };

  const generateInvoice = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const downloadPDF = () => {
    const element = document.createElement('a');
    const file = new Blob([`Invoice ${invoice.id}\n\nClient: ${invoice.client.name}\nTotal: $${invoice.total.toFixed(2)}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `invoice-${invoice.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const sendInvoice = () => {
    if (invoice.client.email) {
      alert(`Invoice sent to ${invoice.client.email}`);
    } else {
      alert('Please enter client email address');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
      <EnhancedSEO
        title="Zion AI Invoice Generator - Smart Invoice Creation Tool | Zion Tech Group"
        description="Create professional invoices instantly with our AI-powered invoice generator. Automated calculations, templates, and professional formatting. Start free trial today!"
        keywords="AI invoice generator, invoice software, automated invoicing, business invoicing, invoice templates, professional invoices"
        canonical="https://ziontechgroup.com/zion-ai-invoice-generator"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <FileText className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Invoice Generation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Invoice Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create professional invoices in seconds with our intelligent AI-powered generator. 
            Automated calculations, smart templates, and seamless client management.
          </p>

          {/* Pricing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$29<span className="text-lg text-gray-400">/month</span></div>
              <div className="text-gray-300 mb-4">Unlimited invoices • AI-powered features • Professional templates</div>
              <FuturisticButton variant="primary" size="lg" className="w-full">
                Start Free Trial
              </FuturisticButton>
            </div>
          </div>
        </div>

        {/* Main Invoice Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Invoice Form */}
          <div className="lg:col-span-2">
            <FuturisticCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Invoice Details</h2>
                <div className="flex gap-2">
                  <FuturisticButton
                    variant="outline"
                    size="sm"
                    onClick={generateInvoice}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    {isGenerating ? 'Generating...' : 'Save Draft'}
                  </FuturisticButton>
                  <FuturisticButton
                    variant="primary"
                    size="sm"
                    onClick={downloadPDF}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </FuturisticButton>
                </div>
              </div>

              {/* Invoice Header */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Invoice Number</label>
                  <input
                    type="text"
                    value={invoice.id}
                    onChange={(e) => setInvoice(prev => ({ ...prev, id: e.target.value }))}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
                  <input
                    type="date"
                    value={invoice.dueDate}
                    onChange={(e) => setInvoice(prev => ({ ...prev, dueDate: e.target.value }))}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Client Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2 text-cyan-400" />
                  Client Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Client Name</label>
                    <input
                      type="text"
                      value={invoice.client.name}
                      onChange={(e) => setInvoice(prev => ({ 
                        ...prev, 
                        client: { ...prev.client, name: e.target.value }
                      }))}
                      placeholder="Enter client name"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={invoice.client.email}
                      onChange={(e) => setInvoice(prev => ({ 
                        ...prev, 
                        client: { ...prev.client, email: e.target.value }
                      }))}
                      placeholder="client@example.com"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={invoice.client.phone}
                      onChange={(e) => setInvoice(prev => ({ 
                        ...prev, 
                        client: { ...prev.client, phone: e.target.value }
                      }))}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                    <input
                      type="text"
                      value={invoice.client.address}
                      onChange={(e) => setInvoice(prev => ({ 
                        ...prev, 
                        client: { ...prev.client, address: e.target.value }
                      }))}
                      placeholder="Client address"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Invoice Items */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-cyan-400" />
                    Invoice Items
                  </h3>
                  <FuturisticButton
                    variant="outline"
                    size="sm"
                    onClick={addItem}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </FuturisticButton>
                </div>

                <div className="space-y-4">
                  {invoice.items.map((item, index) => (
                    <div key={item.id} className="grid grid-cols-12 gap-4 items-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="col-span-5">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                          placeholder="Item description"
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.rate}
                          onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                          placeholder="Rate"
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div className="col-span-2 text-right">
                        <span className="text-white font-medium">${item.amount.toFixed(2)}</span>
                      </div>
                      <div className="col-span-1">
                        {invoice.items.length > 1 && (
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
                <textarea
                  value={invoice.notes}
                  onChange={(e) => setInvoice(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Additional notes or terms..."
                  rows={3}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={generateInvoice}
                  disabled={isGenerating}
                  className="flex-1"
                >
                  {isGenerating ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <FileText className="w-5 h-5 mr-2" />
                  )}
                  {isGenerating ? 'Generating Invoice...' : 'Generate Invoice'}
                </FuturisticButton>
                <FuturisticButton
                  variant="outline"
                  size="lg"
                  onClick={sendInvoice}
                  className="flex-1"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send to Client
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </div>

          {/* Invoice Summary */}
          <div className="lg:col-span-1">
            <FuturisticCard className="p-6 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-cyan-400" />
                Invoice Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal:</span>
                  <span>${invoice.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (10%):</span>
                  <span>${invoice.tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total:</span>
                    <span>${invoice.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-cyan-400" />
                  From
                </h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="font-medium text-white">{invoice.company.name}</div>
                  <div>{invoice.company.email}</div>
                  <div>{invoice.company.phone}</div>
                  <div className="text-xs">{invoice.company.address}</div>
                </div>
              </div>

              {/* Status */}
              {isSaved && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-green-400 text-sm">Invoice saved successfully!</span>
                </div>
              )}
            </FuturisticCard>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion AI Invoice Generator?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Generation</h3>
              <p className="text-gray-300">Smart templates and automated calculations powered by advanced AI algorithms.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Professional PDFs</h3>
              <p className="text-gray-300">Generate high-quality, professional PDF invoices with custom branding.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automated Delivery</h3>
              <p className="text-gray-300">Send invoices directly to clients via email with tracking and reminders.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Streamline Your Invoicing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our AI-powered invoice generator to save time and get paid faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton variant="primary" size="lg">
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton variant="outline" size="lg">
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIInvoiceGenerator;
