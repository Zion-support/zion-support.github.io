import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

    name: string;
    title?: string;
    bio?: string;
    experience?: string;

  try {
    const prompt = `You are assisting with creating a professional marketplace talent profile. Return strict JSON with fields: summary (100-150 words), skills (array of standardized skill tags), title (optimized), category (one of: AI/ML, Engineering, DevOps/Cloud, Security, Data, Product). Use concise, compelling language.

INPUT\nName: ${name}\nCurrent Title: ${title || ''}\nBio: ${bio || ''}\nExperience: ${experience || ''}\nSkills: ${skills || ''}`;

