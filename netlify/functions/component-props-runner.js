


exports && exports.handler = async () => {





  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' }
}

exports && exports.handler = async () => {
  const logs = [],
  function logStep(name, fn) {

    logs && logs.push(`\n=== ${name} ===`),
    const { status, stdout, stderr } = fn(),
    if (stdout) logs && logs.push(stdout),
    if (stderr) logs && logs.push(stderr),`
    logs && logs.push(`exit=${status}`),

    return status
  }


},


