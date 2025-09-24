import os, re
root = '/workspace/zion-os/src'
pattern = re.compile(r'<<<<<<<[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+', re.M)
keep_right = re.compile(r'<<<<<<<[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+', re.M)
changed = 0
for dirpath, _, filenames in os.walk(root):
    for fn in filenames:
        if not fn.endswith(('.ts', '.tsx', '.js')):
            continue
        p = os.path.join(dirpath, fn)
        try:
            with open(p, 'r', encoding='utf-8') as f:
                s = f.read()
            if '<<<<<<< ' in s:
                # Replace each conflict with the right side
                def repl(match):
                    m = keep_right.search(match.group(0))
                    return m.group(1) if m else ''
                ns = pattern.sub(lambda m: repl(m), s)
                if ns != s:
                    with open(p, 'w', encoding='utf-8') as f:
                        f.write(ns)
                    changed += 1
        except Exception as e:
            pass
print(f'files_changed={changed}')
