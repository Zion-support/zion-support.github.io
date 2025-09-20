import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContentItem {
  
id: string;
title: string;
type: 'blog' | 'page' | 'product' | 'service';
status: 'published' | 'draft' | 'scheduled';
publishDate: string;
views: number;
author: string;
}
}
};
export const ContentManagement: React.FC = () => {const [content, setContent] = useState<ContentItem[]>([
{id: '2',
{id: '3',
default: return 'text-gray-400 bg-gray-900';
}
default: return '📄';
}