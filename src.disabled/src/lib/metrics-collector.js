const fs = require('fs')
const path = require('path')
class MetricsCollector {
  constructor() {
    this.metrics = {
      "requests": '0',
      "errors": '0',
      "responseTime": '[]',
      "memoryUsage": '[]',
      "timestamp": Date.now()
    }}


