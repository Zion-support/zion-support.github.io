#!/""usr/bin/env"" node;
class MergeConflictResolver {
  constructor() {
  this.projectRoot = process.cwd()    this.conflictsResolved = 0;
    this.conflictsFound = []
    this.logFile = path.join(