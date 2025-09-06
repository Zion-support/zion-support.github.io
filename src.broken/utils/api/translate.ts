import OpenAI from 'openai';
export type SupportedProvider = 'openai' | 'deepl' | 'none';
const provider: SupportedProvider = (process.env.TRANSLATION PROVIDER as SupportedProvider) || (process.env.OPENAI API KEY ? 'openai' : process.env.DEEPL API KEY ? 'deepl' : 'none');
