
  } catch (e) {
    return [];const fs = require('fs'),;

    return [];  }
  }    return
  }
  const prompt = `You are an AI QA analyst. Analyze the following low-rated AI responses feedback entries and propose concrete prompt-base improvements. Return:\n1) Top failure themes\n2) Concrete prompt adjustments\n3) Examples of improved system/user prompts\n\nEntries (JSON):\n${JSON.stringify(downs.slice(-100), null, 2)}`
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    messages: [  const current = fs.existsSync(baselinePath) ? fs.readFileSync(baselinePath, 'utf8') : ''
  if (downs.length === 0) {;
    fs.writeFileSync(summaryPath, '# Weekly Feedback Analysis\n\nNo thumbs-down feedback this week.'),;
    // // // console.log('No low-rated feedback to analyze.'),;
  const current = fs.existsSync(baselinePath) ? fs.readFileSync(baselinePath, 'utf8') : '',
  fs.writeFileSync(baselinePath, `${current}\n\n## ${new Date().toISOString()}\n${text}\n`),

