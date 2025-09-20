return (
<div className="space-y-6">;
<div className="grid md:grid-cols-3 gap-6">;
<Card className="md:col-span-2">;
<CardHeader>;
<div className="flex items-center justify-between">;
<h3 className="text-lg font-semibold">Zapier Connection</h3>;
<Badge variant="outline" className="bg-blue-100 text-blue-800">;
Active;
</Badge>;
</div>;
</CardHeader>;
<CardContent>;
<p className="text-sm text-muted-foreground mb-4">;
Connect Zion with 3000+ apps via Zapier. Use your API key below;
to set up integrations.;
</p>;
<div className="space-y-4">;
<div className="space-y-2">;
<label className="text-sm font-medium">Your Zion API Key</label>;
<div className="flex gap-2">;
<Input;
value={apiKey}
