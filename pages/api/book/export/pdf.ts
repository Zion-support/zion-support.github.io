// Book export PDF API endpoint
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

export default async function handler(req: any, res: any) {
  try {
    res.status(200).json({ message: 'Book export PDF endpoint' });
  } catch (e: any) {
    try {
      // await browser.close();
    } catch {
      // ignore
    }
    res.status(500).json({
      error: e?.message || 'Failed to render PDF'
    });
  }
}