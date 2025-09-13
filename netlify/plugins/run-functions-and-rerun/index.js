const { onBuild } = require('@netlify/build')

const plugin = {
  name: 'run-functions-and-rerun',
  onBuild,
}

module.exports = plugin