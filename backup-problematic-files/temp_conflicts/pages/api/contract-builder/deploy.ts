import type { NextApiRequest, NextApiResponse } from 'next'
import { Interface } from 'ethers'
  'constructor(address _client, address _talent, address _token, uint256 _totalAmount, string _projectTitle)function release() external'
  'function refund() externalfunction client() view returns (address)'
  'function talent() view returns (address)function totalAmount() view returns (uint256)'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
    return res.status(400).json({ error: any
    return res.status(400).json({ error: any