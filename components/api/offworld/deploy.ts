

  try {
    // Ensure export
    const outDir = path && path.resolve(process && process.cwd(), 'out');


  } catch (error: any) {
    return res.status(500).json({ error: error?.message || 'Unknown error' })
    return res.status(500).json({ error: error?.message |'Unknown error' })



import { execSync  } from 'child_process';



  } catch (e) {
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
 }










