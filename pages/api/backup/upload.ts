import { Web3Storage, File } from '[^']*';

const TOKEN = null;
    return res.status(200).json({ cid })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Backup failed' })
  }
}