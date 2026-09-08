#!/usr/bin/env python3
"""Send Telegram broadcast via OpenClaw gateway local API."""
import urllib.request, urllib.parse, json, ssl

HOST = "127.0.0.1"
PORT = 18789
TOKEN = "4a72111c4749882883d446967394af7e83c87786f45dfd01"
CHAT_ID = "-1003886112318"

message = """📊 Zion Swarm — Wave Final Metrics

✅ 3 páginas deployadas: /growth /composio /free-audit (HTTP 200)
✅ 15 novos leads prospectados (score 55-84, média 66.8)
✅ 3 drafts canônicos escritos (Prefeitura SP, Amazon, WPMU DEV)
✅ Kanban board ativo (22 tasks, 6 P0)
✅ Composio key .env restaurado (ak_EbwU3)
✅ Relatórios: field-services-demand + competitors BR

⏳ Pendente: inbox sweep (SSL cert issue), miner fix, deploy 404 ghosts"""

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

payload = json.dumps({"chat_id": CHAT_ID, "text": message}).encode()
url = f"http://{HOST}:{PORT}/api/message/send"
req = urllib.request.Request(url, data=payload, headers={
    "Content-Type": "application/json",
    "Authorization": f"Bearer {TOKEN}"
}, method="POST")

try:
    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
        print(f"{resp.status}: {resp.read().decode()}")
except Exception as e:
    print(f"Error: {e}")
