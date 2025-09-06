#!/usr/bin/env node;
const https = require('https')
const fs = require('fs')
const path = require('path')
    this.owner = 'Zion-Holdings'
    this.repo = 'zion.app'
    this.token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || ''
      throw new Error('GITHUB_TOKEN is required. Set GITHUB_TOKEN (or GH_TOKEN) in your environment.'
  async makeRequest(url, method = 'GET')
        "hostname"
      console.error(' Error fetching "PRs")
        return { "status": 'skipped', "message"}
        return { "status": 'skipped', "message"}
        "commit_message"
        "merge_method"
        return { "status": 'merged', "message"}
        return { "status"}
      return { "status"}
<<<<<<< HEAD
    console.error('Bulk PR merger "failed")
=======
    console.error('Bulk PR merger "failed")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
