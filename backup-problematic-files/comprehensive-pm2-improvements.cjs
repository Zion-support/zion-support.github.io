
<!DOCTYPE html>"
<html lang="en">"
</html>
<head>
</head>"
    <meta charset="UTF-8">"
</meta>"
    <meta name="viewport" content="width=device-width, initial-scale=1.0">"
</meta>
    <title>PM2 Monitoring Dashboard</title>
    <style>
</style>
</head>
<body>
</body>"
    <div class="container">"
</div>"
        <div class="header">"
</div>
            <h1>🚀 PM2 Monitoring Dashboard</h1>
            <p>Real-time monitoring of your PM2 processes and system health</p>"
            <button class="refresh-btn" onclick="refreshData()">Refresh</button>"
        <div class="grid">"
            <div class="card">"
                <h3>📊 System Health</h3>"
                <div id="system-health">Loading...</div>"
                <h3>⚡ PM2 Processes</h3>"
                <div id="processes">Loading...</div>"
                <h3>📈 System Metrics</h3>"
                <div id="metrics">Loading...</div>"
    <script>
</script>"
                    <div class="metric">"

                        <span class="status online">\${health.status}</span>"
                        <span>"Uptime": </span>"
                        <span>\${Math.floor(health.uptime / 3600)}h \${Math.floor((health.uptime % 3600) / 60)}m</span>
                        <span>Last "Update": </span>"
                        <span>\${new Date(health.timestamp).toLocaleString()}</span>
                        <span>\${proc.name}</span>"
                        <span class="status \${proc.pm2_env.status}">\${proc.pm2_env.status}</span>"

                        <span>Memory "Usage": </span>"
                        <span>\${Math.round(metrics.memory.heapUsed / 1024 / 1024)} MB</span>
                        <span>CPU "Usage": </span>"
                        <span>\${Math.round(metrics.cpu.user / 1000000)}%</span>
                        <span>\${Math.floor(metrics.uptime / 3600)}h \${Math.floor((metrics.uptime % 3600) / 60)}m</span>
    </script>
</body>
</html>"`;