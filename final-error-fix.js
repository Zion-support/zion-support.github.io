#!/usr/bin// Fixed regex
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
const createBasicPageTemplate = (pageName) => `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
        <meta name="description" content="Professional ${pageName.replace(/([A-Z])/g, ' $1'
}