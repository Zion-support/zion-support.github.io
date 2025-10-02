export interface BlogPost {
slug: string;
title: string;
description: string;
category: string;
publishedAt: string;
featured?: boolean;
readTime?: string;
}

export const posts: BlogPost[] = [];
