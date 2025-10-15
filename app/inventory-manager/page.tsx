'use client';
import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CircleStackIcon, 
  PlusIcon, 
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ShoppingCartIcon,
  TruckIcon,
  TagIcon,
  CalendarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  minQuantity: number;
  maxQuantity: number;
  unitPrice: number;
  totalValue: number;
  supplier: string;
  location: string;
  lastUpdated: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock' | 'discontinued';
}

const InventoryManager: React.FC = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [newItem, setNewItem] = useState({
    name: '',
    sku: '',
    category: 'general',
    quantity: 0,
    minQuantity: 10,
    maxQuantity: 100,
    unitPrice: 0,
    supplier: '',
    location: 'warehouse-a'
  });

  // Load items from localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem('inventoryItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      // Initialize with sample data
      const sampleItems: InventoryItem[] = [
        {
          id: '1',
          name: 'Wireless Mouse',
          sku: 'WM-001',
          category: 'Electronics',
          quantity: 45,
          minQuantity: 10,
          maxQuantity: 100,
          unitPrice: 25.99,
          totalValue: 1169.55,
          supplier: 'TechSupply Inc',
          location: 'warehouse-a',
          lastUpdated: '2024-01-15T10:30:00Z',
          status: 'in-stock'
        },
        {
          id: '2',
          name: 'Mechanical Keyboard',
          sku: 'MK-002',
          category: 'Electronics',
          quantity: 5,
          minQuantity: 15,
          maxQuantity: 80,
          unitPrice: 89.99,
          totalValue: 449.95,
          supplier: 'KeyTech Solutions',
          location: 'warehouse-b',
          lastUpdated: '2024-01-14T14:20:00Z',
          status: 'low-stock'
        },
        {
          id: '3',
          name: 'Office Chair',
          sku: 'OC-003',
          category: 'Furniture',
          quantity: 0,
          minQuantity: 5,
          maxQuantity: 25,
          unitPrice: 199.99,
          totalValue: 0,
          supplier: 'Furniture Plus',
          location: 'warehouse-a',
          lastUpdated: '2024-01-10T09:15:00Z',
          status: 'out-of-stock'
        },
        {
          id: '4',
          name: 'Monitor Stand',
          sku: 'MS-004',
          category: 'Accessories',
          quantity: 120,
          minQuantity: 20,
          maxQuantity: 150,
          unitPrice: 45.50,
          totalValue: 5460.00,
          supplier: 'Accessory World',
          location: 'warehouse-c',
          lastUpdated: '2024-01-16T11:45:00Z',
          status: 'in-stock'
        },
        {
          id: '5',
          name: 'Desk Lamp',
          sku: 'DL-005',
          category: 'Furniture',
          quantity: 8,
          minQuantity: 12,
          maxQuantity: 50,
          unitPrice: 35.75,
          totalValue: 286.00,
          supplier: 'Lighting Solutions',
          location: 'warehouse-b',
          lastUpdated: '2024-01-13T16:30:00Z',
          status: 'low-stock'
        }
      ];
      setItems(sampleItems);
    }
  }, []);

  // Save items to localStorage
  useEffect(() => {
    localStorage.setItem('inventoryItems', JSON.stringify(items));
  }, [items]);

  // Filter items
  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.supplier.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(item => item.status === statusFilter);
    }

    setFilteredItems(filtered);
  }, [items, searchTerm, categoryFilter, statusFilter]);

  const addItem = () => {
    if (newItem.name.trim() && newItem.sku.trim()) {
      const item: InventoryItem = {
        id: Date.now().toString(),
        ...newItem,
        totalValue: newItem.quantity * newItem.unitPrice,
        lastUpdated: new Date().toISOString(),
        status: newItem.quantity === 0 ? 'out-of-stock' : 
                newItem.quantity <= newItem.minQuantity ? 'low-stock' : 'in-stock'
      };
      setItems([...items, item]);
      setNewItem({
        name: '',
        sku: '',
        category: 'general',
        quantity: 0,
        minQuantity: 10,
        maxQuantity: 100,
        unitPrice: 0,
        supplier: '',
        location: 'warehouse-a'
      });
      setShowAddForm(false);
    }
  };

  const updateItem = (id: string, updates: Partial<InventoryItem>) => {
    setItems(items.map(item => 
      item.id === id 
        ? { 
            ...item, 
            ...updates, 
            totalValue: (updates.quantity || item.quantity) * (updates.unitPrice || item.unitPrice),
            lastUpdated: new Date().toISOString(),
            status: (updates.quantity || item.quantity) === 0 ? 'out-of-stock' : 
                    (updates.quantity || item.quantity) <= (updates.minQuantity || item.minQuantity) ? 'low-stock' : 'in-stock'
          } 
        : item
    ));
    setEditingItem(null);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const getStatusColor = (status: InventoryItem['status']) => {
    switch (status) {
      case 'in-stock': return 'text-green-400 bg-green-900/20 border-green-500';
      case 'low-stock': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500';
      case 'out-of-stock': return 'text-red-400 bg-red-900/20 border-red-500';
      case 'discontinued': return 'text-gray-400 bg-gray-900/20 border-gray-500';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500';
    }
  };

  const getStatusIcon = (status: InventoryItem['status']) => {
    switch (status) {
      case 'in-stock': return <CheckCircleIcon className="w-4 h-4" />;
      case 'low-stock': return <ExclamationTriangleIcon className="w-4 h-4" />;
      case 'out-of-stock': return <ExclamationTriangleIcon className="w-4 h-4" />;
      case 'discontinued': return <XCircleIcon className="w-4 h-4" />;
      default: return <CircleStackIcon className="w-4 h-4" />;
    }
  };

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];
  const statuses = ['all', 'in-stock', 'low-stock', 'out-of-stock', 'discontinued'];

  const stats = {
    totalItems: items.length,
    totalValue: items.reduce((sum, item) => sum + item.totalValue, 0),
    lowStockItems: items.filter(item => item.status === 'low-stock').length,
    outOfStockItems: items.filter(item => item.status === 'out-of-stock').length,
    inStockItems: items.filter(item => item.status === 'in-stock').length
  };

  return (
    <>
      <SEOHead 
        title="Inventory Manager Pro - Advanced Stock Management System | Zion Tech Group"
        description="Professional inventory management solution with real-time tracking, automated alerts, and comprehensive analytics. Optimize your stock levels and reduce costs."
        keywords="inventory management, stock management, warehouse management, inventory tracking, stock optimization, supply chain"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Header */}
        <section className="bg-slate-800/50 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Inventory Manager Pro
                  </span>
                </h1>
                <p className="text-gray-300">Advanced stock management and inventory tracking system</p>
              </div>
              <div className="flex items-center gap-4 mt-4 lg:mt-0">
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
                >
                  <PlusIcon className="w-5 h-5" />
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Dashboard */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">{stats.totalItems}</div>
                <div className="text-gray-300">Total Items</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-green-400 mb-2">${stats.totalValue.toLocaleString()}</div>
                <div className="text-gray-300">Total Value</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-green-400 mb-2">{stats.inStockItems}</div>
                <div className="text-gray-300">In Stock</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.lowStockItems}</div>
                <div className="text-gray-300">Low Stock</div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-red-400 mb-2">{stats.outOfStockItems}</div>
                <div className="text-gray-300">Out of Stock</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search items by name, SKU, or supplier..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>
                      {status === 'all' ? 'All Status' : status.replace('-', ' ')}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Items Table */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Item</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">SKU</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Quantity</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Unit Price</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Total Value</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {filteredItems.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-white">{item.name}</div>
                            <div className="text-sm text-gray-400">{item.supplier}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300">{item.sku}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">{item.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">{item.quantity}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">${item.unitPrice.toFixed(2)}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">${item.totalValue.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                            {getStatusIcon(item.status)}
                            <span className="ml-1">{item.status.replace('-', ' ')}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingItem(item)}
                              className="p-2 text-blue-400 hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                              title="Edit item"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteItem(item.id)}
                              className="p-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-300"
                              title="Delete item"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Add Item Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Add New Item</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="SKU"
                    value={newItem.sku}
                    onChange={(e) => setNewItem({...newItem, sku: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={newItem.category}
                    onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="general">General</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Office Supplies">Office Supplies</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Supplier"
                    value={newItem.supplier}
                    onChange={(e) => setNewItem({...newItem, supplier: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({...newItem, quantity: parseInt(e.target.value) || 0})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="number"
                    placeholder="Min Quantity"
                    value={newItem.minQuantity}
                    onChange={(e) => setNewItem({...newItem, minQuantity: parseInt(e.target.value) || 0})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="number"
                    placeholder="Max Quantity"
                    value={newItem.maxQuantity}
                    onChange={(e) => setNewItem({...newItem, maxQuantity: parseInt(e.target.value) || 0})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Unit Price"
                    value={newItem.unitPrice}
                    onChange={(e) => setNewItem({...newItem, unitPrice: parseFloat(e.target.value) || 0})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <select
                    value={newItem.location}
                    onChange={(e) => setNewItem({...newItem, location: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="warehouse-a">Warehouse A</option>
                    <option value="warehouse-b">Warehouse B</option>
                    <option value="warehouse-c">Warehouse C</option>
                    <option value="store-front">Store Front</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={addItem}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Add Item
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Item Form Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-xl font-semibold text-white">Edit Item</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Item Name"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="SKU"
                    value={editingItem.sku}
                    onChange={(e) => setEditingItem({...editingItem, sku: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="general">General</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Office Supplies">Office Supplies</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Supplier"
                    value={editingItem.supplier}
                    onChange={(e) => setEditingItem({...editingItem, supplier: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={editingItem.quantity}
                    onChange={(e) => setEditingItem({...editingItem, quantity: parseInt(e.target.value) || 0})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="number"
                    placeholder="Min Quantity"
                    value={editingItem.minQuantity}
                    onChange={(e) => setEditingItem({...editingItem, minQuantity: parseInt(e.target.value) || 0})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="number"
                    placeholder="Max Quantity"
                    value={editingItem.maxQuantity}
                    onChange={(e) => setEditingItem({...editingItem, maxQuantity: parseInt(e.target.value) || 0})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Unit Price"
                    value={editingItem.unitPrice}
                    onChange={(e) => setEditingItem({...editingItem, unitPrice: parseFloat(e.target.value) || 0})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <select
                    value={editingItem.location}
                    onChange={(e) => setEditingItem({...editingItem, location: e.target.value})}
                    className="px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="warehouse-a">Warehouse A</option>
                    <option value="warehouse-b">Warehouse B</option>
                    <option value="warehouse-c">Warehouse C</option>
                    <option value="store-front">Store Front</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => updateItem(editingItem.id, editingItem)}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Update Item
                  </button>
                  <button
                    onClick={() => setEditingItem(null)}
                    className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Inventory Features</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <ExclamationTriangleIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Alerts</h3>
                <p className="text-gray-300">Automated low-stock and reorder alerts to prevent stockouts.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics & Reports</h3>
                <p className="text-gray-300">Comprehensive analytics to optimize inventory levels and reduce costs.</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <TruckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Supply Chain Integration</h3>
                <p className="text-gray-300">Seamless integration with suppliers and logistics partners.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Inventory <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your inventory needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$79<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 1,000 items
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic reporting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Low stock alerts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$199<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10,000 items
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    AI-powered insights
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-6">$499<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited items
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Multi-location support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced security
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    24/7 support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Optimize Your Inventory Management
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of intelligent inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InventoryManager;