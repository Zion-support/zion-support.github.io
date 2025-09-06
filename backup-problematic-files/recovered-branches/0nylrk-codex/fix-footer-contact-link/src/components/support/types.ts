<<<<<<< HEAD
import { ReactNode  } from './react';
export interface HelpArticle {
  id: string;
  title: string;
  content: string;
  last_updated: string;
  tags: string[];
=======

import { ReactNode } from "react",;
;
export interface HelpArticle {;
  id:string,;
  title:string,;
  content:string,;
  lastUpdated:string,;
  tags:string[];}
;
export interface HelpCategory {;
  id:string,;
  name:string,;
  description:string,;
  icon:ReactNode,;
  articles:HelpArticle[];
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
export interface SupportTicket {;
  id:string,;
  userId:string,;
  subject:string,;
  message:string,;
  status:"open" | "in-progress" | "resolved" | "closed",;
  priority:"low" | "medium" | "high",;
  createdAt:string,;
  updatedAt:string;
} export interface HelpArticle {
  id: string;
title: string;
content: string;
lastUpdated: string;
tags: string[] 
}export interface HelpCategory {
  id: string;
<<<<<<< HEAD
  user_id: string;
  subject: string;
  message: string;
  status: "open" | "in - progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high";
  created_at: string;
  updated_at: string;
}
=======
name: string;
description: string;
icon: ReactNode;
articles: HelpArticle[] 
}export interface SupportTicket {
  userId: string;
subject: string;
message: string;
status: "open" | "in-progress" | "resolved" | "closed";
priority: "low" | "medium" | "high";
createdAt: string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
