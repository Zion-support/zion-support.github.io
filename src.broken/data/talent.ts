import type { TalentProfile } from '@/utils/types/talent';

export const TALENT_PROFILES: TalentProfile[] = [
  {
    slug: 'ava-chen',
    name: 'Ava Chen',
    title: 'Senior LLM Engineer',
    category: 'AI/ML',
    location: 'Toronto, CA',
    timezone: 'America/Toronto',
    region: 'North America',
    skills: ['LLM Ops', 'RAG', 'OpenAI', 'LangChain', 'Vector DBs', 'TypeScript'],
    summary:
      'Senior LLM Engineer specializing in end-to-end GenAI systems with retrieval, evaluation, and safety guardrails. Proven track record shipping reliable AI products at scale.',
    bio:
      'Architects robust LLM applications with retrieval, evaluation, and safety guardrails. Ex-FAANG applied scientist.',
    hourlyRateUsd: 140,
    availability: 'Open',
    profileImageUrl: 'https://i.pravatar.cc/30o0?img=1',
    portfolio: [
      { title: 'RAG Platform Template', url: 'https://example.com/rag' },
