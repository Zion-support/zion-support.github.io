
const { execSync } = require('child_process'),
const fs = require('fs'),
const path = require('path'),


        }
      },
      return {,
        totalBranches: allBranches.length,
        mergedBranches: mergedBranches.length,
        deletedBranches: deletedCount,
        branchesToDelete: branchesToDelete.length
      }

    }
  },
  async checkForConflicts() {,
    try {,
      this.log('Checking for merge conflicts...'),
      // Check if there are any merge conflicts,
      const status = execSync('git status --porcelain', {,
        encoding: 'utf8',
        cwd: process.cwd()
      }),
      const hasConflicts = status.includes('UU') || status.includes('AA') || status.includes('DD'),
      return {,
        hasConflicts,
        conflictFiles: hasConflicts ? status.split('\n').filter(line =>,
          line.includes('UU') || line.includes('AA') || line.includes('DD'),
        ) : []
      }
    } catch (error) {,
      this.log(`Conflict check failed: ${error.message}`, 'ERROR'),
      return { error: error.message }
    }
  },
  async optimizeRepository() {,
    try {,
      this.log('Optimizing repository...'),
      // Run git gc to optimize repository,
      execSync('git gc --prune=now', {,
        stdio: 'pipe',
        cwd: process.cwd()
      }),
      // Check repository size,
      const repoSize = this.getRepositorySize(),
      return {,
        message: 'Repository optimization completed',
        repositorySize: repoSize
      }
    } catch (error) {,
      this.log(`Repository optimization failed: ${error.message}`, 'ERROR'),
      return { error: error.message }
    }
  },
  getRepositorySize() {,
    try {,
      const result = execSync('du -sh .git', {,
        encoding: 'utf8',
        cwd: process.cwd()
      }),
      return result.trim().split('\t')[0]
    } catch (error) {,
      this.log(`Failed to get repository size: ${error.message}`, 'ERROR'),
      return 'Unknown'
    }
  },
  generateWorkflowRecommendations(gitStatus, branchCleanup, conflictCheck) {,
    const recommendations = [],
    if (!gitStatus.workingDirectoryClean) {,
      recommendations.push('Working directory has uncommitted changes - consider committing or stashing')
    },
    if (conflictCheck.hasConflicts) {,
      recommendations.push('Merge conflicts detected - resolve before proceeding')
    },
    if (branchCleanup.branchesToDelete > 10) {,
      recommendations.push('Many old branches detected - consider regular cleanup')
    },
    if (recommendations.length === 0) {,
      recommendations.push('Git workflow is in good state')
    },
    return recommendations
  },
ursor/automate-test-improve-and-merge-code-8ee2
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
>>>>>>> 8796e3849ea134a1ec01eed18b098b8e737df5b5
