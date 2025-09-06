import OpenAI from 'openai';
Company: ${opts && opts.company || 'Confidential';
Location: ${opts && opts.location || 'Remote';
Key skills: ${(opts && opts.tags || []).join() || 'N/A';
    model: 'gpt-4o-mini';
Company: ${opts.company || 'Confidential';
Location: ${opts.location || 'Remote';
Key skills: ${(opts.tags || []).join () || 'N / A';
    model: 'gpt - 4o - mini';