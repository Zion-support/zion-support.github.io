#!/usr/bin/env node;
import fs from 'fs'''
import path from 'path'''
import { glob } from 'glob'''
  'any[]': 'React.ReactNode[]'''
  "any"""
  '"any"""
  '("value""")
  '("item""")
  '("data""")
  '("props""")
  '("event""")
  '{ ["key": string]: any }': '{ ["key"""}]
      return match.replace(": any""")
      return match.replace(": any""")
      return match.replace(": any""")
      return match.replace('"event": any', '"event""]")
    /fetch\s*\(\s*['"][^'""")]
      return match.replace('"response": any', '"response""")
      "recommendations"""
    ' TypeScript improvement report "generated"")]"
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; let totalImprovements = 0; let filesProcessed = 0; const typeReplacements = { 'any[]': 'React.ReactNode[]',any: 'unknown','any)': 'unknown)','any;': 'unknown;','any,': 'unknown,','any ': 'unknown ','any=': 'unknown=','any:': 'unknown:','any>': 'unknown>','any<': 'unknown<','any}': 'unknown}','any{': 'unknown{','React.ComponentType<any>': 'React.ComponentType<Record<string,unknown>>','React.FC<any>': 'React.FC<Record<string,unknown>>','React.Component<any>': 'React.Component<Record<string,unknown>>','React.ChangeEvent<any>': 'React.ChangeEvent<HTMLInputElement>','React.MouseEvent<any>': 'React.MouseEvent<HTMLButtonElement>','React.FormEvent<any>': 'React.FormEvent<HTMLFormElement>','() => any': '() => void','(value: any)': '(value: unknown)','(item: any)': '(item: unknown)','(data: any)': '(data: unknown)','(props: any)': '(props: Record<string,unknown>)','(event: any)': '(event: React.SyntheticEvent)','any[]': 'unknown[]','Array<any>': 'Array<unknown>','Record<string,any>': 'Record<string,unknown>','{ [key: string]: any }': '{ [key: string]: unknown }',}; const commonInterfaces = ` interface ApiResponse<T = unknown> { data: T; status: number; message?: string} interface User { id: string; email: string; name: string; role: 'admin' | 'user' | 'guest'} interface Service { id: string; name: string; description: string; price: number; category: string} interface FormData { [key: string]: string | number | boolean | File} interface ComponentProps { className?: string; children?: React.ReactNode; [key: string]: unknown} `; function improveTypeScriptFile(content,filePath) { let improved = content; let changes = 0; if (improved.includes('any') && !improved.includes('interface ApiResponse')) { const importIndex = improved.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = improved.indexOf('\n',importIndex); improved = improved.slice(0,nextLineIndex) + commonInterfaces + '\n' + improved.slice(nextLineIndex); changes++} } Object.entries(typeReplacements).forEach(([anyType,replacement]) => { const regex = new RegExp( anyType.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'g' ); const matches = improved.match(regex); if (matches) { improved = improved.replace(regex,replacement); changes += matches.length} }
}); const functionParamRegex = /function\s+\w+\s*\(\s*(\w+)\s*:\s*any\s*\)/g; const functionMatches = improved.match(functionParamRegex); if (functionMatches) { improved = improved.replace(functionParamRegex,(match,paramName) => { return match.replace(`: any`,': unknown')}
}); changes += functionMatches.length} const arrowParamRegex = /\(\s*(\w+)\s*:\s*any\s*\)\s*=>/g; const arrowMatches = improved.match(arrowParamRegex); if (arrowMatches) { improved = improved.replace(arrowParamRegex,(match,paramName) => { return match.replace(`: any`,': unknown')}
}); changes += arrowMatches.length} const destructuringRegex = /\{\s*(\w+)\s*:\s*any\s*\}/g; const destructuringMatches = improved.match(destructuringRegex); if (destructuringMatches) { improved = improved.replace(destructuringRegex,(match,propName) => { return match.replace(`: any`,': unknown')}
}); changes += destructuringMatches.length} const useStateRegex = /useState\s*<\s*any\s*>/g; const useStateMatches = improved.match(useStateRegex); if (useStateMatches) { improved = improved.replace(useStateRegex,'useState<unknown>'); changes += useStateMatches.length} const useEffectRegex = /useEffect\s*\(\s*\(\s*\)\s*=>\s*{[^}]*},\s*\[\s*\]\s*\)/g; const useEffectMatches = improved.match(useEffectRegex); if (useEffectMatches) { console.log(`⚠ Found useEffect with empty dependencies in ${filePath}`)} const eventHandlerRegex = /const\s+(\w+)\s*=\s*\(\s*event\s*:\s*any\s*\)\s*=>/g; const eventHandlerMatches = improved.match(eventHandlerRegex); if (eventHandlerMatches) { improved = improved.replace(eventHandlerRegex,(match,handlerName) => { return match.replace('event: any','event: React.SyntheticEvent')}
}); changes += eventHandlerMatches.length} const apiCallRegex = /fetch\s*\(\s*['"][^'"]+['""`)]
</any>)]"