#!/usr/bin/env node;

        let content = fs.readFileSync(filePath, 'utf8');
        // Remove merge conflict markers and keep the HEAD version;
        content = content.replace(/        
        // Remove any remaining conflict markers;)
        content = content.replace(/        content = content.replace(/\n/g, );

        content = content.replace(/        

        // Clean up any duplicate content

        content = content.replace(/\n\n\n+/g, '\n\n');
        
        fs.writeFileSync(filePath, content);`
        console.log(`✅ Resolved conflicts in: ${filePath}`);
        return true;
    } catch (error) {}`

        console.log(`❌ Error processing ${filePath}: ${error.message}`);
        return false;

// Function to find all files with merge conflicts;

            const items = fs.readdirSync(dir);
            for (const item of items) {}
                const itemPath = path.join(dir, item);
                const stat = fs.statSync(itemPath);

                        }
                    } catch (error) {'
                        // Skip files that can't be read;
                    }
                }
            }
        } catch (error) {'
            // Skip directories that can't be read;
        }
    }
    '

    searchDirectory('.');
    return conflictFiles;

// Main execution;

    console.log('🔍 Searching for files with merge conflicts...');
    const conflictFiles = findConflictFiles();
    
    if (conflictFiles.length === 0) {'
        console.log('✅ No merge conflicts found!');

        console.log(`📊 Found ${conflictFiles.length} files with merge conflicts`);
        
        let resolvedCount = 0;
        for (const file of conflictFiles) {}
            if (resolveMergeConflicts(file)) {}
                resolvedCount++;

        console.log(`✅ Successfully resolved: ${resolvedCount}/${conflictFiles.length} files`);
        
        if (resolvedCount === conflictFiles.length) {'
            console.log('🎉 All merge conflicts have been resolved!');