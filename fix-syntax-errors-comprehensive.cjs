
function fixSyntaxErrors(content, filePath) {
    let fixes = 0;
    let originalContent = content;

    // Fix triple quotes in imports;


    // Fix malformed JSX closing tags;
    content = content.replace(/<\/HTMLDivElement>/g, );
    content = content.replace(/<\/HTMLInputElement>/g, );
    content = content.replace(/<\/HTMLParagraphElement>/g, );
    content = content.replace(/<\/h3>/g, );
    // Fix malformed return statements;
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*\/\*[^*]*\*\/\s*<div[^>]*>\s*<div[^>]*><\/div>\s*<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>([^<]*)<\/h1>\s*<\/div>\s*<p[^>]*>([^<]*)<\/p>\s*<p[^>]*>([^<]*)<\/p>\s*<div[^>]*>\s*<Link[^>]*>([^<]*)<\/Link>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)/g, (match, title, desc1, desc2, linkText) => {
</div>
        <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">"
</div>"
            <div className="relative overflow-hidden">"

                <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">"
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">"
</h1>
                    </h1>"
                    <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">"
</p>
                    </p>"
                    <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">"
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                        <Link href="/contact" className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">"


      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;


