

type Props = { report: Report | null },






import fs from 'fs';,
import path from 'path';
import type { GetStaticProps } from 'next';
interface Node { id: string, tokens: string[] }
interface Edge { source: string, target: string, weight: number, terms: string[] }
interface Report { generatedAt: string, nodes: Node[], edges: Edge[], topTerms: { term: string, count: number }[] }


interface Edge { source: string, target: string, weight: number, terms: string[]}

interface Report { generatedAt: string, nodes: Node[], edges: Edge[], topTerms: { term: string, count: number }[]

type Props = any
  return (
    <div className="space-y-6">;"
      <header className="space-y-1">;"
        <h1 className="text-3xl font-bold">Knowledge Graph</h1>;"










