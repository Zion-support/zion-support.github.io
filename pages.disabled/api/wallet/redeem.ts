import type { NextApiRequest, NextApiResponse } from 'next';


    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }



