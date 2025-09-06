const { exec_sync } = require ('child_process'
const fs = require ('fs'
const path = require ('path'
  console.log (' Running accessibility tests...'
    const result = exec_sync ('npx @axe - core / cli http: any