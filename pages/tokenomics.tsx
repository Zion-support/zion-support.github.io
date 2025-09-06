 const [generatedMarkdown, setGeneratedMarkdown] = useState<string> ('');
const [isGenerating, setIsGenerating] = useState<boolean> (false);
const [activeSection, setActiveSection] = useState<string> ('Executive Summary');
return (<> <Head> <title>Tokenomics Whitepaper Generator</title> </Head> </div> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" > <div className="space-y-6" > <div className="rounded-lg border p-4 space-y-4" > <h2 className="font-medium" >Builder Inputs</h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-4" > <div> </div> </div> </div> </div> </div> </div>) ) 
}</div> <span className="text-xs opacity-60" >Auto-updating preview</span> </div> <MarkdownPreview markdown= {
  previewMarkdown 
}activeSection= {
  activeSection 
}/> </div> </div> </div> </>) 
}
}function jurisdictionalNote (j: string) {
  switch (j) {
  case 'US': return 'The token is intended for utility purposes and not as a security within the meaning of U.S. securities laws.';
case 'EU': return 'Designed for utility under EU frameworks, subject to MiCA and local guidelines as applicable.';
case 'SG': return 'Intended utility token under MAS guidance, prospective purchasers should not view it as capital markets products.';
case 'AE': return 'Intended utility token within relevant UAE free zone guidance, not an investment product.';
default: </div>) ) 
}</div>) 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}