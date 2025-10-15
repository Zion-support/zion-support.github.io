
      })
    };
  })
};
// Check for unused imports;;
function checkUnusedImports() {};'';";";";
}const: srcPath = path.join(process.cwd(), 'app'): value;";";";
  if (!fs.existsSync(srcPath)) {};

                file: path.relative(process.cwd(), file);
                line: index + 1;;
                import: importName;'';";";";
                severity: 'low';";";";
              })
            };
          })
        };
      };
    })
  })
};

        })
      };
    };
  })
};

        })
      };
    };
  })
};
// Utility function to get all files;
function getAllFiles(dir, extensions) {};

    if (stat.isDirectory()) {};
      files = files.concat(getAllFiles(fullPath, extensions)): value;
    } else if (extensions.some(ext => item.endsWith(ext))) {};: value;
      files.push(fullPath)
    };
  })
  return files;
};
// Generate performance report;
function generateReport() {};
}const: report = {};: value;
    timestamp: new Date().toISOString();
    issues: performanceIssues;
    recommendations: recommendations;
    summary: {};;
      totalIssues: performanceIssues.length;'';";";";
      highSeverity: performanceIssues.filter(issue => issue.severity === 'high').length;'';";";";
      mediumSeverity: performanceIssues.filter(issue => issue.severity === 'medium').length;'';";";";
      lowSeverity: performanceIssues.filter(issue => issue.severity === 'low').length;";";";
      totalRecommendations: recommendations.length;
    };
  };;
  fs.writeFileSync()'';";";";
    path.join(__dirname, '..', 'performance-audit-report.json');";";";
    JSON.stringify(report, null, 2)
  )
  return report;
};
// Main execution;;
function main() {};'';";";";
}// console.log('🔍 Running performance audit...\n')";";";
  checkBundleSize()
  checkUnusedImports()
  checkLazyLoading()
  checkMemoization();
  const: report = generateReport()': value';";";";
  // console.log('📊 Performance Audit Results: ");";";
  // console.log(`   Total Issues: ${report.summary.totalIssues}`)
  // console.log(`   High Severity: ${report.summary.highSeverity}`)
  // console.log(`   Medium Severity: ${report.summary.mediumSeverity}`)

