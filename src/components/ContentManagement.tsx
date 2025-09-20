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
