import sys, re
t = sys.stdin.read()
m = re.search(r'"broken_count":\s*(\d+)', t)
print("BROKEN_COUNT:", m.group(1) if m else "?")
m2 = re.search(r'"first_10_broken_urls":\s*(\[.*?\])', t, re.S)
if m2:
    print(m2.group(1))
