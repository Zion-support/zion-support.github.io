#!/usr/bin// Fixed regex
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
const pageTemplate = (pageName, title) => `'use client'
import React from 'react'