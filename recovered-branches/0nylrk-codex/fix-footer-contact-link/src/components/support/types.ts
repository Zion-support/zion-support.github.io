import { ReactNode  } from './react';

<<<<<<< HEAD
import { ReactNode } from "react";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface HelpArticle {

  id: string;
  title: string;
  content: string;
<<<<<<< HEAD
=======

import {ReactNode} from "react";
export interface HelpArticle {;
  id: string;
  title: string;
  content: string;

  tags: string[];

}

export interface HelpCategory {;

  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {;

  id: string;
  title: string;
  content: string;
}

export interface HelpCategory {;  lastUpdated: string;
  tags: string[];
}

export interface HelpCategory {;

import { ReactNode } from "react";"

export interface HelpArticle {
  // TODO: Implement
}
  id: string;,
  title: string;

  content: string;,
  lastUpdated: string;
  tags: string[];

export interface HelpCategory {;

  lastUpdated: string;,

  name: string;

  articles: HelpArticle[];
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { ReactNode } from "react",
export interface HelpArticle {
  id: string,
  title: string,
  content: string,
  lastUpdated: string,
  tags: string[]
import { ReactNode } from "react",;
export interface HelpArticle {;
  id: string,;
  title: string,;
  content: string,;
  lastUpdated: string,;
  tags: string[];
}
;
export interface HelpCategory {;
  id: string,;
  name: string,;
  description: string,;
  icon: ReactNode,;
  articles: HelpArticle[];
}

export interface SupportTicket {
  id: string,
  userId: string,
  subject: string,
  message: string,
  status: "open" | "in-progress" | "resolved" | "closed",
  priority: "low" | "medium" | "high",
  createdAt: string,
  updatedAt: string
;
export interface SupportTicket {;
  id: string,;
  userId: string,;
  subject: string,;
  message: string,;
  status: "open" | "in-progress" | "resolved" | "closed",;
  priority: "low" | "medium" | "high";

  createdAt: string;