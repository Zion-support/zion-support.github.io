

${packageJson.description || 'A modern web application built with Next.js'};
;

## 🚀 Getting Started;
### Prerequisites;
- Node.js ${process.version}
- npm ${execSync('npm --version', { encoding: 'utf8' }).trim()}

### Installation;
\`\`\`bash;
npm install;
\`\`\`;
### Development;
\`\`\`bash;
npm run dev;
\`\`\`;

\`\`\`bash;
npm run build;
npm start;
\`\`\`;
## 📁 Project Structure;
\`\`\`;
${this.projectRoot}/;
├── pages/ # Next.js pages;
├── components/ # React components;
├── styles/ # CSS styles;
├── public/ # Static assets;
├── scripts/ # Build and utility scripts;
└── package.json # Dependencies and scripts;
\`\`\`;
## 🛠️ Available Scripts;

- ESLint for code quality;
- Prettier for code formatting;
- PM2 for process management;
## 📊 Monitoring;

- Performance monitoring;
- Security scanning;
- Health checks;
- Automated testing;
## 🤝 Contributing;
1. Fork the repository;
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`);
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`);
4. Push to the branch (\`git push origin feature/AmazingFeature\`);
5. Open a Pull Request;
## 📄 License;
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.;
## 📞 Support;
For support, email support@example.com or create an issue in the repository.;
---;

`,
,
      fs.writeFileSync('docs/COMPONENTS.md', docsContent),
,
      return {,

,
// Run the docs generator,
const docsGenerator = new DocsGenerator(),
docsGenerator.run().catch(error => {,
