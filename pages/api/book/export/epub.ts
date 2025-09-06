// Book export EPUB API endpoint
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

export default async function handler(req: any, res: any) {
  try {
    res.status(200).json({ message: 'Book export EPUB endpoint' });
  } catch (e: any) {
    res.status(500).json({
      error: e?.message || 'Failed to build EPUB'
    });
  }
}

function chapterToHtml(text: string): string {
  if (!text) return '';
  return text.split(/\n\n+/).map((p) => `<p>${escapeHtml(p)}</p>`).join('\n');
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}