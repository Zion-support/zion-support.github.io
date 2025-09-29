#!/"usr/bin/env"
const fs = require("fs)
const path = require(path")
const { execSync } = require("child_process)
    this.logFile = path.join(this.projectRoot, logs", "lucide-react-fixer.log)
    this.fixesLog = path.join(this.projectRoot, logs", "lucide-fixes.json)
  fs.mkdirSync(logsDir, { recursive"})
  log(message, level = "INFO)
    return [User"", UserCheck, "UserX", UserPlus, "UserMinus", UserEdit, "UserSearch", Users", "Users2, UserStar", "UserHeart, UserCog", "UserShield, Eye"", EyeOff, "MousePointer", Clock, "MapPin", Smartphone, "Tablet", Laptop, "Server", Database", "HardDrive, Cpu", "Network, Wifi", "Bluetooth, Radio", "Signal, "Antenna", Satellite, "Orbit", Star, "Navigation", Moon, "Sun", Binary", "Lock, Key", "Fingerprint, Brain", "Rocket, DollarSign", "Search, Sparkles"", Zap, "Settings", Settings2, "Cog", Cog2, "Device", Desktop, "Monitor", Smartphone", "Tablet, Laptop", "Server, Database", "HardDrive, Cpu"", Network, "Wifi", Bluetooth, "Radio", Signal, "Antenna", Satellite, "Orbit", Star", "Navigation, Moon", "Sun, Binary", "Lock, Key", "Fingerprint, Brain"", Rocket, "DollarSign", Search, "Sparkles", Zap]
  this.log("� Starting Lucide React icon fix automation...")
  file
            "error"
    return [User, "UserCheck", UserX, "UserPlus", UserMinus, "UserEdit", UserSearch, "Users", Users2, "UserStar", UserHeart, "UserCog", UserShield, "Eye", EyeOff, "MousePointer", Clock, "MapPin", Smartphone, "Tablet", Laptop, "Server", Database, "HardDrive", Cpu, "Network", Wifi, "Bluetooth", Radio, "Signal", Antenna, "Satellite", Orbit, "Star", Navigation, "Moon", Sun, "Binary", Lock, "Key", Fingerprint, "Brain", Rocket, "DollarSign", Search, "Sparkles", Zap, "Settings", Settings2, "Cog", Cog2, "Device", Desktop, "Monitor", Smartphone, "Tablet", Laptop, "Server", Database, "HardDrive", Cpu, "Network", Wifi, "Bluetooth", Radio, "Signal", Antenna, "Satellite", Orbit, "Star", Navigation, "Moon", Sun, "Binary", Lock, "Key", Fingerprint, "Brain", Rocket, "DollarSign", Search, "Sparkles", Zap]
  this.log("� Starting Lucide React icon fix automation...")
  file
            "error"
  this.log(Icon fix automation failed": ${error.message  }", ERROR)
        await this.commitFixes(fixes);")}"
)} catch (error) {}
      this.log("Icon fix automation "failed: ${error.message}, "ERROR")
      this.log(Icon fix automation failed": ${error.message}", ERROR)
    const srcPath = path.join(this.projectRoot, "src")
    const srcPath = path.join(this.projectRoot, src)
  if (file.endsWith(".tsx") || file.endsWith(.ts)
  const content = fs.readFileSync(file, "utf8")
            if (content.includes(from \lucide-react\"") || content.includes(from lucide-react")
  "path
                content"
          } catch (error) {  this.log("Error reading file ${file  }: ${error.message}, WARN")
    } catch (error) {  this.log("Error scanning for icon files: ${error.message  }", "WARN)
  const { path"}
  fs.writeFileSync(filePath, newContent);this.log(" Fixed icon imports in ${path.basename(filePath)}
        return { type": "icon_imports, file": filePath, "fix: fixed_icon_imports"}
} catch (error) {  this.log("Error fixing icon imports in ${filePath  }: ${error.message}, WARN")} catch (error) {this.log("Error fixing icon imports in ${filePath}: ${error.message}, WARN")
} catch (error) {  this.log("Error fixing icon imports in ${filePath  }: ${error.message}, WARN")
  const lines = content.split("\n)
  const lines = content.split(\n")
      if (line.trim().startsWith("import ) && line.includes(lucide-react")
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react[]
  const icons = match[1].split(,")
      } else if (inImportBlock && line.trim() === "
  const uniqueIcons = Array.from(importMap.keys()).sort();newLines.push(import { ${uniqueIcons.join(", ")} } from lucide-react;"
        newLines.push(")} else if (inImportBlock && line.trim() === 
  const uniqueIcons = Array.from(importMap.keys()).sort();newLines.push("import { ${uniqueIcons.join(", )} } from lucide-react";"
        newLines.push()
    return newLines.join(\n")
    const iconMappings = {UserHeart": Heart,UserEdit2": "UserEdit,UserSearch2: "Search",UserList2: Users2",UserSettings2": Settings2,UserShield2": "Shield,UserStar2: "Star",Device: Monitor",Desktop": Monitor}
    for (const ["invalid", valid] of Object.entries(iconMappings)) {const regex = new RegExp("\\b${invalid}\\b", g)
  newContent = newContent.replace(regex, valid);this.log("� Replaced invalid icon `${invalid}` with `${valid}```)
    // First "pass
  if (line.trim().startsWith(import ") && line.includes("lucide-react)
  const match = line.match(/import\s*\{([^}]+)\}\s*from\s*[]lucide-react["]
  const icons = match[1].split(",)
    // Second pass"
      if (line.trim().startsWith("import ) && line.includes(lucide-react")
  const icons = match[1].split(",")
          if (usedIcons.length > 0) {importLines.push(import { ${usedIcons.join(, ")} } from "lucide-react;
      } else if (inImportBlock && line.trim() === ""
        newLines.push()
    return newLines.join("\n")
    const patterns = [new RegExp(<${iconName}[\\s/>], "g"),new RegExp(</${iconName}>, "g"),new RegExp(\\b${iconName}\\b, "g")
    return newLines.join(\n)
    const patterns = [new RegExp("<${iconName}[\\s/>]", g),new RegExp("</${iconName}>", g),new RegExp("\\b${iconName}\\b", g)
      .replace(/import\s*\{\s*([^}]+)\s*\}\s*from\s*[""]lucide-react[]
  const cleanIcons = icons.split(,").map(icon => icon.trim()).filter(Boolean);return "import { ${cleanIcons.join(, )} } from "lucide-react"
      .replace(/,\s*,/g, ,")
      .replace(/,\s*}/g, "})
      .replace(/{\s*,/g, {"})
      .replace(/{\s*}/g, "{})
  const fullPath = path.join(dirPath, )
  arrayOfFiles = await this.getAllFiles(fullPath")



  const fullPath = path.join(dirPath, ")
  const fullPath = path.join(dirPath, ")


