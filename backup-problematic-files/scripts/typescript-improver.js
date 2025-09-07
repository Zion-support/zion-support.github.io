#!/usr/bin/env node;

import fs from 'fs';''
import path from 'path';''
import { glob } from 'glob';'
let totalImprovements = 0;
let filesProcessed = 0;
// Common type replacements;
const typeReplacements = {
  // React types;'
  'any[]': 'React.ReactNode[]',''
  "any": 'unknown',''
  'any)': 'unknown)',''
  'any;': 'unknown;',''
  'any,': 'unknown,',''
  'any ': 'unknown ',''
  'any=': 'unknown=',''
  '"any": ': 'unknown:',''
  'any>': 'unknown>',''
  'any<': 'unknown<',''
  'any}': 'unknown}',''
  'any{': 'unknown{','
  // Specific React component types;'
  'React.ComponentType<any>': 'React.ComponentType<Record<string, unknown>>','
</any>'
  'React.FC<any>': 'React.FC<Record<string, unknown>>','
</any>'
  'React.Component<any>': 'React.Component<Record<string, unknown>>','
</any>'
  'React.ChangeEvent<any>': 'React.ChangeEvent<HTMLInputElement>','
</any>'
  'React.MouseEvent<any>': 'React.MouseEvent<HTMLButtonElement>','
</any>'
  'React.FormEvent<any>': 'React.FormEvent<HTMLFormElement>','
</any>'
  '("props": any)': '(props: Record<string, unknown>)','
</string>'
  'Array<any>': 'Array<unknown>','
</any>'
  'Record<string, any>': 'Record<string, unknown>','
</string>
interface ApiResponse<T = unknown> {
</T>
  const useStateRegex = /useState\s*<\s*any\s*>/g;
  const useStateMatches = improved.match(useStateRegex);
  if (useStateMatches) {'
    improved = improved.replace(useStateRegex, 'useState<unknown>');'
</unknown>'

