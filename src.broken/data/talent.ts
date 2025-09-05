import type {_TalentProfile} from '@/utils/types/talent';

export const TALENT_PROFILES: TalentProfile[] = [
  {_slug: 'ava-chen', _name: 'Ava Chen', _title: 'Senior LLM Engineer', _category: 'AI/ML', _location: 'Toronto, _CA', _timezone: 'America/Toronto', _region: 'North America', _skills: ['LLM Ops', _'RAG', _'OpenAI', _'LangChain', _'Vector DBs', _'TypeScript'], _summary:
      'Senior LLM Engineer specializing in end-to-end GenAI systems with retrieval, _evaluation, _and safety guardrails. Proven track record shipping reliable AI products at scale.', _bio:
      'Architects robust LLM applications with retrieval, _evaluation, _and safety guardrails. Ex-FAANG applied scientist.', _hourlyRateUsd: 140, _availability: 'Open', _profileImageUrl: 'https://i.pravatar.cc/300?img=1', _portfolio: [
      { title: 'RAG Platform Template', _url: 'https://example.com/rag'},
      {_title: 'LLM Evaluation Toolkit', _url: 'https://example.com/eval'}],
    verified: true,
    rating: 4.9,
    reviewsCount: 28,
    createdAt: new Date().toISOString()},
  {_slug: 'marco-silva', _name: 'Marco Silva', _title: 'Cloud Solutions Architect', _category: 'DevOps/Cloud', _location: 'Lisbon, _PT', _timezone: 'Europe/Lisbon', _region: 'Europe', _skills: ['AWS', _'Kubernetes', _'Terraform', _'Serverless', _'Networking'], _summary:
      'Cloud architect focused on scalable multi-account AWS platforms, _platform engineering, _and secure-by-default patterns for modern teams.', _bio: 'Designs scalable, _secure multi-account AWS platforms and platform engineering toolchains.', _hourlyRateUsd: 120, _availability: 'Part-time', _profileImageUrl: 'https://i.pravatar.cc/300?img=2', _portfolio: [
      { title: 'Multi-Account AWS Landing Zone', _url: 'https://example.com/aws'}],
    verified: true,
    rating: 4.8,
    reviewsCount: 19,
    createdAt: new Date().toISOString()},
  {_slug: 'nina-patel', _name: 'Nina Patel', _title: 'Data Scientist • GenAI', _category: 'AI/ML', _location: 'Austin, _US', _timezone: 'America/Chicago', _region: 'North America', _skills: ['Python', _'PyTorch', _'NLP', _'Evaluation', _'Prompting', _'Dashboards'], _summary:
      'Data scientist delivering measurable outcomes with rigorous evaluation, _fast iteration, _and pragmatic product sense.', _bio: 'Builds data products end-to-end with strong model evaluation and product sense.', _hourlyRateUsd: 110, _availability: 'Open', _profileImageUrl: 'https://i.pravatar.cc/300?img=3', _portfolio: [{ title: 'NLP Evaluation Dashboard', _url: 'https://example.com/nlp'}],
    verified: false,
    rating: 4.7,
    reviewsCount: 12,
    createdAt: new Date().toISOString()},
  {_slug: 'kenji-yamada', _name: 'Kenji Yamada', _title: 'Full‑Stack AI Engineer', _category: 'Engineering', _location: 'Tokyo, _JP', _timezone: 'Asia/Tokyo', _region: 'Asia', _skills: ['Next.js', _'TypeScript', _'Rust', _'PostgreSQL', _'OpenAI', _'Vercel'], _summary:
      'Full‑stack developer building sleek, _performant AI web apps with modern DX, _observability, _and delightful UX.', _bio: 'Delivers sleek, _performant AI web apps with modern DX and observability.', _hourlyRateUsd: 95, _availability: 'Booked', _profileImageUrl: 'https://i.pravatar.cc/300?img=4', _portfolio: [{ title: 'AI SaaS Starter', _url: 'https://example.com/saas'}],
    verified: true,
    rating: 4.6,
    reviewsCount: 34,
    createdAt: new Date().toISOString()},
  {_slug: 'lena-mueller', _name: 'Lena Müller', _title: 'Security Engineer', _category: 'Security', _location: 'Berlin, _DE', _timezone: 'Europe/Berlin', _region: 'Europe', _skills: ['Threat Modeling', _'AppSec', _'SAST/DAST', _'Zero Trust', _'IAM'], _summary:
      'Security engineer who hardens platforms with developer‑friendly security programs, _practical controls, _and measurable impact.', _bio: 'Hardens platforms with practical, _developer‑friendly security programs.', _hourlyRateUsd: 130, _availability: 'Open', _profileImageUrl: 'https://i.pravatar.cc/300?img=5', _portfolio: [{ title: 'Zero Trust Rollout Case Study', _url: 'https://example.com/zt'}],
    verified: false,
    rating: 4.5,
    reviewsCount: 9,
    createdAt: new Date().toISOString()}];