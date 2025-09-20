import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContentItem {
id: string;
title: string;
type: 'blog' | 'page' | 'product' | 'service';
status: 'published' | 'draft' | 'scheduled';
publishDate: string;
views: number;,
author: string;};
export const ContentManagement: React.FC = () => {
const [content, setContent] = useState<ContentItem[]>([
{
id: '1',
title: 'AI Revolution in Enterprise',
type: 'blog',
status: 'published',
publishDate: '2024-01-15',
views: 1234,
author: 'John Doe'},
{
id: '2',
title: 'Quantum Computing Solutions',
type: 'service',
status: 'published',
publishDate: '2024-01-14',
views: 987,
author: 'Jane Smith'},
{
id: '3',
title: 'Digital Transformation Guide',
type: 'blog',
status: 'draft',
publishDate: '2024-01-16',
views: 0,
author: 'Mike Johnson'},
{
id: '4',
title: 'Cybersecurity Services',
type: 'service',
status: 'scheduled',
publishDate: '2024-01-17',
views: 0,
author: 'Sarah Wilson',;
};
]);

const [selectedType, setSelectedType] = useState<string>('all');
const [selectedStatus, setSelectedStatus] = useState<string>('all');

const filteredContent = content.filter(item => {;
const typeMatch = selectedType === 'all' || item.type === selectedType;
const statusMatch = selectedStatus === 'all' || item.status === selectedStatus;
return typeMatch && statusMatch;
});

const getStatusColor: any = (status: string) => {
switch (status) {;
case 'published': return 'text-green-400 bg-green-900';
case 'draft': return 'text-yellow-400 bg-yellow-900';
case 'scheduled': return 'text-blue-400 bg-blue-900';,
default: return 'text-gray-400 bg-gray-900';}
};

const getTypeIcon: any = (type: string) => {
switch (type) {;
case 'blog': return '📝';
case 'page': return '📄';
case 'product': return '🛍️';
case 'service': return '⚙️';,
default: return '📄';}
};

return (
<div className="p-6 bg-gray-900 min-h-screen">;
<motion.div;
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="max-w-7xl mx-auto"
>;
<div className="flex justify-between items-center mb-8">;
<h1 className="text-3xl font-bold text-white">Content Management</h1>;
<button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">;
+ Create New Content;
</button>;
</div>;

{/* Filters */}
<div className="flex space-x-4 mb-8">;
<select;
value={selectedType}
onChange={(e) => setSelectedType(e.target.value)}
className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
>;
<option value="all">All Types</option>;
<option value="blog">Blog Posts</option>;
<option value="page">Pages</option>;
<option value="product">Products</option>;
<option value="service">Services</option>;
</select>;

<select;
value={selectedStatus}
onChange={(e) => setSelectedStatus(e.target.value)}
className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
>;
<option value="all">All Status</option>;
<option value="published">Published</option>;
<option value="draft">Draft</option>;
<option value="scheduled">Scheduled</option>;
</select>;
</div>;

{/* Content List */}
<div className="bg-gray-800 rounded-lg border border-gray-700">;
<div className="p-6 border-b border-gray-700">;
<div className="grid grid-cols-12 gap-4 text-gray-400 text-sm font-medium">;
<div className="col-span-5">Title</div>;
<div className="col-span-2">Type</div>;
<div className="col-span-2">Status</div>;
<div className="col-span-1">Views</div>;
<div className="col-span-2">Actions</div>;
</div>;
</div>;

<div className="divide-y divide-gray-700">;
{filteredContent.map((item, index) => (
<motion.div;
key={item.id}
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.05 }}
className="p-6 hover:bg-gray-750 transition-colors"
>;
<div className="grid grid-cols-12 gap-4 items-center">;
<div className="col-span-5">;
<div className="flex items-center space-x-3">;
<span className="text-2xl">{getTypeIcon(item.type)}</span>;
<div>;
<h3 className="text-white font-medium">{item.title}</h3>;
<p className="text-gray-400 text-sm">By {item.author}</p>;
</div>;
</div>;
</div>;

<div className="col-span-2">;
<span className="text-gray-400 capitalize">{item.type}</span>;
</div>;

<div className="col-span-2">;
<span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>;
{item.status}
</span>;
</div>;

<div className="col-span-1">;
<span className="text-gray-400">{item.views.toLocaleString()}</span>;
</div>;

<div className="col-span-2">;
<div className="flex space-x-2">;
<button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">;
Edit;
</button>;
<button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700">;
View;
</button>;
</div>;
</div>;
</div>;
</motion.div>;
))}
</div>;
</div>;

{/* Quick Stats */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">;
{[
{ label: 'Total Content', value: content.length, icon: '📄' },
{ label: 'Published', value: content.filter(c => c.status === 'published').length, icon: '✅' },
{ label: 'Drafts', value: content.filter(c => c.status === 'draft').length, icon: '📝' },
{ label: 'Total Views', value: content.reduce((sum, c) => sum + c.views, 0).toLocaleString(), icon: '👁️' }
].map((stat, index) => (
<motion.div;
key={stat.label}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1 }}
className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center"
>;
<div className="text-3xl mb-2">{stat.icon}</div>;
<div className="text-2xl font-bold text-white mb-1">{stat.value}</div>;
<div className="text-gray-400 text-sm">{stat.label}</div>;
</motion.div>;
))}
</div>;
</motion.div>;
</div>;
);
};

export default ContentManagement;
<//div><///div>;