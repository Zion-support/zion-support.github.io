#!/usr/bin/env python3
import os
import re
import glob

def fix_malformed_jsx(file_path):
    """Fix malformed JSX in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Fix malformed JSX patterns created by the previous script
        # Fix patterns like <Head><>\n</Head>
        content = re.sub(r'<Head><>\s*\n\s*</Head>', '<Head>', content, flags=re.MULTILINE)
        
        # Fix patterns like <title>content<>\n</title>
        content = re.sub(r'<title>([^<]*)<>\s*\n\s*</title>', r'<title>\1</title>', content, flags=re.MULTILINE)
        
        # Fix patterns like <meta[^>]*/><>\n</meta[^>]*/>
        content = re.sub(r'(<meta[^>]*/>)<>\s*\n\s*</meta[^>]*/>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <div[^>]*><>\n</div>
        content = re.sub(r'(<div[^>]*>)<>\s*\n\s*</div>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <h[1-6][^>]*><>\n</h[1-6]>
        content = re.sub(r'(<h[1-6][^>]*>)<>\s*\n\s*</h[1-6]>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <p[^>]*><>\n</p>
        content = re.sub(r'(<p[^>]*>)<>\s*\n\s*</p>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <button[^>]*><>\n</button>
        content = re.sub(r'(<button[^>]*>)<>\s*\n\s*</button>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <span[^>]*><>\n</span>
        content = re.sub(r'(<span[^>]*>)<>\s*\n\s*</span>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <a[^>]*><>\n</a>
        content = re.sub(r'(<a[^>]*>)<>\s*\n\s*</a>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <img[^>]*/><>\n</img>
        content = re.sub(r'(<img[^>]*/>)<>\s*\n\s*</img>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <input[^>]*/><>\n</input>
        content = re.sub(r'(<input[^>]*/>)<>\s*\n\s*</input>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <br[^>]*/><>\n</br>
        content = re.sub(r'(<br[^>]*/>)<>\s*\n\s*</br>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <hr[^>]*/><>\n</hr>
        content = re.sub(r'(<hr[^>]*/>)<>\s*\n\s*</hr>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <link[^>]*/><>\n</link>
        content = re.sub(r'(<link[^>]*/>)<>\s*\n\s*</link>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <script[^>]*><>\n</script>
        content = re.sub(r'(<script[^>]*>)<>\s*\n\s*</script>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <style[^>]*><>\n</style>
        content = re.sub(r'(<style[^>]*>)<>\s*\n\s*</style>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <section[^>]*><>\n</section>
        content = re.sub(r'(<section[^>]*>)<>\s*\n\s*</section>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <article[^>]*><>\n</article>
        content = re.sub(r'(<article[^>]*>)<>\s*\n\s*</article>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <header[^>]*><>\n</header>
        content = re.sub(r'(<header[^>]*>)<>\s*\n\s*</header>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <footer[^>]*><>\n</footer>
        content = re.sub(r'(<footer[^>]*>)<>\s*\n\s*</footer>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <nav[^>]*><>\n</nav>
        content = re.sub(r'(<nav[^>]*>)<>\s*\n\s*</nav>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <main[^>]*><>\n</main>
        content = re.sub(r'(<main[^>]*>)<>\s*\n\s*</main>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <aside[^>]*><>\n</aside>
        content = re.sub(r'(<aside[^>]*>)<>\s*\n\s*</aside>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <ul[^>]*><>\n</ul>
        content = re.sub(r'(<ul[^>]*>)<>\s*\n\s*</ul>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <ol[^>]*><>\n</ol>
        content = re.sub(r'(<ol[^>]*>)<>\s*\n\s*</ol>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <li[^>]*><>\n</li>
        content = re.sub(r'(<li[^>]*>)<>\s*\n\s*</li>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <table[^>]*><>\n</table>
        content = re.sub(r'(<table[^>]*>)<>\s*\n\s*</table>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <tr[^>]*><>\n</tr>
        content = re.sub(r'(<tr[^>]*>)<>\s*\n\s*</tr>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <td[^>]*><>\n</td>
        content = re.sub(r'(<td[^>]*>)<>\s*\n\s*</td>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <th[^>]*><>\n</th>
        content = re.sub(r'(<th[^>]*>)<>\s*\n\s*</th>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <thead[^>]*><>\n</thead>
        content = re.sub(r'(<thead[^>]*>)<>\s*\n\s*</thead>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <tbody[^>]*><>\n</tbody>
        content = re.sub(r'(<tbody[^>]*>)<>\s*\n\s*</tbody>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <tfoot[^>]*><>\n</tfoot>
        content = re.sub(r'(<tfoot[^>]*>)<>\s*\n\s*</tfoot>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <form[^>]*><>\n</form>
        content = re.sub(r'(<form[^>]*>)<>\s*\n\s*</form>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <label[^>]*><>\n</label>
        content = re.sub(r'(<label[^>]*>)<>\s*\n\s*</label>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <select[^>]*><>\n</select>
        content = re.sub(r'(<select[^>]*>)<>\s*\n\s*</select>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <option[^>]*><>\n</option>
        content = re.sub(r'(<option[^>]*>)<>\s*\n\s*</option>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <textarea[^>]*><>\n</textarea>
        content = re.sub(r'(<textarea[^>]*>)<>\s*\n\s*</textarea>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <fieldset[^>]*><>\n</fieldset>
        content = re.sub(r'(<fieldset[^>]*>)<>\s*\n\s*</fieldset>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <legend[^>]*><>\n</legend>
        content = re.sub(r'(<legend[^>]*>)<>\s*\n\s*</legend>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <figure[^>]*><>\n</figure>
        content = re.sub(r'(<figure[^>]*>)<>\s*\n\s*</figure>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <figcaption[^>]*><>\n</figcaption>
        content = re.sub(r'(<figcaption[^>]*>)<>\s*\n\s*</figcaption>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <details[^>]*><>\n</details>
        content = re.sub(r'(<details[^>]*>)<>\s*\n\s*</details>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <summary[^>]*><>\n</summary>
        content = re.sub(r'(<summary[^>]*>)<>\s*\n\s*</summary>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <mark[^>]*><>\n</mark>
        content = re.sub(r'(<mark[^>]*>)<>\s*\n\s*</mark>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <time[^>]*><>\n</time>
        content = re.sub(r'(<time[^>]*>)<>\s*\n\s*</time>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <data[^>]*><>\n</data>
        content = re.sub(r'(<data[^>]*>)<>\s*\n\s*</data>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <meter[^>]*><>\n</meter>
        content = re.sub(r'(<meter[^>]*>)<>\s*\n\s*</meter>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <progress[^>]*><>\n</progress>
        content = re.sub(r'(<progress[^>]*>)<>\s*\n\s*</progress>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <output[^>]*><>\n</output>
        content = re.sub(r'(<output[^>]*>)<>\s*\n\s*</output>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <canvas[^>]*><>\n</canvas>
        content = re.sub(r'(<canvas[^>]*>)<>\s*\n\s*</canvas>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <svg[^>]*><>\n</svg>
        content = re.sub(r'(<svg[^>]*>)<>\s*\n\s*</svg>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <path[^>]*><>\n</path>
        content = re.sub(r'(<path[^>]*>)<>\s*\n\s*</path>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <circle[^>]*><>\n</circle>
        content = re.sub(r'(<circle[^>]*>)<>\s*\n\s*</circle>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <rect[^>]*><>\n</rect>
        content = re.sub(r'(<rect[^>]*>)<>\s*\n\s*</rect>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <line[^>]*><>\n</line>
        content = re.sub(r'(<line[^>]*>)<>\s*\n\s*</line>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <polyline[^>]*><>\n</polyline>
        content = re.sub(r'(<polyline[^>]*>)<>\s*\n\s*</polyline>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <polygon[^>]*><>\n</polygon>
        content = re.sub(r'(<polygon[^>]*>)<>\s*\n\s*</polygon>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <text[^>]*><>\n</text>
        content = re.sub(r'(<text[^>]*>)<>\s*\n\s*</text>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <tspan[^>]*><>\n</tspan>
        content = re.sub(r'(<tspan[^>]*>)<>\s*\n\s*</tspan>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <textPath[^>]*><>\n</textPath>
        content = re.sub(r'(<textPath[^>]*>)<>\s*\n\s*</textPath>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <defs[^>]*><>\n</defs>
        content = re.sub(r'(<defs[^>]*>)<>\s*\n\s*</defs>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <g[^>]*><>\n</g>
        content = re.sub(r'(<g[^>]*>)<>\s*\n\s*</g>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <use[^>]*><>\n</use>
        content = re.sub(r'(<use[^>]*>)<>\s*\n\s*</use>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <symbol[^>]*><>\n</symbol>
        content = re.sub(r'(<symbol[^>]*>)<>\s*\n\s*</symbol>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <marker[^>]*><>\n</marker>
        content = re.sub(r'(<marker[^>]*>)<>\s*\n\s*</marker>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <pattern[^>]*><>\n</pattern>
        content = re.sub(r'(<pattern[^>]*>)<>\s*\n\s*</pattern>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <clipPath[^>]*><>\n</clipPath>
        content = re.sub(r'(<clipPath[^>]*>)<>\s*\n\s*</clipPath>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <mask[^>]*><>\n</mask>
        content = re.sub(r'(<mask[^>]*>)<>\s*\n\s*</mask>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <linearGradient[^>]*><>\n</linearGradient>
        content = re.sub(r'(<linearGradient[^>]*>)<>\s*\n\s*</linearGradient>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <radialGradient[^>]*><>\n</radialGradient>
        content = re.sub(r'(<radialGradient[^>]*>)<>\s*\n\s*</radialGradient>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <stop[^>]*><>\n</stop>
        content = re.sub(r'(<stop[^>]*>)<>\s*\n\s*</stop>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <animate[^>]*><>\n</animate>
        content = re.sub(r'(<animate[^>]*>)<>\s*\n\s*</animate>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <animateTransform[^>]*><>\n</animateTransform>
        content = re.sub(r'(<animateTransform[^>]*>)<>\s*\n\s*</animateTransform>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <animateMotion[^>]*><>\n</animateMotion>
        content = re.sub(r'(<animateMotion[^>]*>)<>\s*\n\s*</animateMotion>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <set[^>]*><>\n</set>
        content = re.sub(r'(<set[^>]*>)<>\s*\n\s*</set>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <mpath[^>]*><>\n</mpath>
        content = re.sub(r'(<mpath[^>]*>)<>\s*\n\s*</mpath>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <foreignObject[^>]*><>\n</foreignObject>
        content = re.sub(r'(<foreignObject[^>]*>)<>\s*\n\s*</foreignObject>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <switch[^>]*><>\n</switch>
        content = re.sub(r'(<switch[^>]*>)<>\s*\n\s*</switch>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <image[^>]*><>\n</image>
        content = re.sub(r'(<image[^>]*>)<>\s*\n\s*</image>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <video[^>]*><>\n</video>
        content = re.sub(r'(<video[^>]*>)<>\s*\n\s*</video>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <audio[^>]*><>\n</audio>
        content = re.sub(r'(<audio[^>]*>)<>\s*\n\s*</audio>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <source[^>]*><>\n</source>
        content = re.sub(r'(<source[^>]*>)<>\s*\n\s*</source>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <track[^>]*><>\n</track>
        content = re.sub(r'(<track[^>]*>)<>\s*\n\s*</track>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <embed[^>]*><>\n</embed>
        content = re.sub(r'(<embed[^>]*>)<>\s*\n\s*</embed>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <object[^>]*><>\n</object>
        content = re.sub(r'(<object[^>]*>)<>\s*\n\s*</object>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <param[^>]*><>\n</param>
        content = re.sub(r'(<param[^>]*>)<>\s*\n\s*</param>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <iframe[^>]*><>\n</iframe>
        content = re.sub(r'(<iframe[^>]*>)<>\s*\n\s*</iframe>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <map[^>]*><>\n</map>
        content = re.sub(r'(<map[^>]*>)<>\s*\n\s*</map>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <area[^>]*><>\n</area>
        content = re.sub(r'(<area[^>]*>)<>\s*\n\s*</area>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <base[^>]*><>\n</base>
        content = re.sub(r'(<base[^>]*>)<>\s*\n\s*</base>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <meta[^>]*><>\n</meta>
        content = re.sub(r'(<meta[^>]*>)<>\s*\n\s*</meta>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <title[^>]*><>\n</title>
        content = re.sub(r'(<title[^>]*>)<>\s*\n\s*</title>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <head[^>]*><>\n</head>
        content = re.sub(r'(<head[^>]*>)<>\s*\n\s*</head>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <body[^>]*><>\n</body>
        content = re.sub(r'(<body[^>]*>)<>\s*\n\s*</body>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <html[^>]*><>\n</html>
        content = re.sub(r'(<html[^>]*>)<>\s*\n\s*</html>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <!DOCTYPE[^>]*><>\n</!DOCTYPE>
        content = re.sub(r'(<!DOCTYPE[^>]*>)<>\s*\n\s*</!DOCTYPE>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <![CDATA[[^>]*><>\n</![CDATA[
        content = re.sub(r'(<!\[CDATA\[[^>]*>)<>\s*\n\s*</!\[CDATA\[', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <!--[^>]*><>\n</!--
        content = re.sub(r'(<!--[^>]*>)<>\s*\n\s*</!--', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <![^>]*><>\n</![^>]*>
        content = re.sub(r'(<![^>]*>)<>\s*\n\s*</![^>]*>', r'\1', content, flags=re.MULTILINE)
        
        # Fix patterns like <[^>]*><>\n</[^>]*>
        content = re.sub(r'(<[^>]*>)<>\s*\n\s*</[^>]*>', r'\1', content, flags=re.MULTILINE)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed malformed JSX in: {file_path}")
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to fix malformed JSX in all files"""
    print("Fixing malformed JSX...")
    
    # Find all TypeScript/JavaScript files
    patterns = ['**/*.tsx', '**/*.ts']
    files_to_fix = []
    
    for pattern in patterns:
        files_to_fix.extend(glob.glob(pattern, recursive=True))
    
    # Filter out node_modules and other directories
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in f and '.git' not in f]
    
    print(f"Found {len(files_to_fix)} files to check")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_malformed_jsx(file_path):
            fixed_count += 1
    
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()
