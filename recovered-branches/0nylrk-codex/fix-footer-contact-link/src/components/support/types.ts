<<<<<<< HEAD
import { ReactNode } from 'react';

export interface HelpArticle {
=======
 export interface HelpArticle {
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  id: string;
title: string;
content: string;
lastUpdated: string;
tags: string[] 
}export interface HelpCategory {
  id: string;
name: string;
description: string;
icon: ReactNode;
articles: HelpArticle[] 
}export interface SupportTicket {
  userId: string;
<<<<<<< HEAD
  subject: string;
  message: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}
=======
subject: string;
message: string;
status: "open" | "in-progress" | "resolved" | "closed";
priority: "low" | "medium" | "high";
createdAt: string;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
