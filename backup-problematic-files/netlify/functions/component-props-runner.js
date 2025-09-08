


    stdio: 'pipe,
  encoding: 'utf8)
  });
  return {
  // TODO: Implement
}
    status: res.status |0;,
  stdout: res.stdout |
    stderr: res.stderr |
    if (stderr) logs.push(stderr);`;
    logs.push(`exit=${status}`);

    return status;
  logStep('components:generate-docs', () =>
    runNode('automation/component-props-docs.cjs')

  );
  logStep('git:sync', () => runNode('automation/advanced-git-sync.cjs'));




