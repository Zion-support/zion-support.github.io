#!/bin/bash

echo "Fixing all final build errors..."

# Fix ai-services.tsx - add missing closing tag
echo "Fixing ai-services.tsx..."
sed -i 's/              ))}/              ))}/' pages/ai-services.tsx

# Fix it-services.tsx - remove duplicate imports
echo "Fixing it-services.tsx..."
sed -i 's/import { Server, Shield, Cloud, Network, Cloud, Shield, Server, Code, Settings, CheckCircle, Users, DollarSign, Brain, Cpu, Wifi, Monitor, AlertTriangle, TrendingUp, Users, Lock, Globe, Cpu, HardDrive, Wifi, Smartphone, Building, BarChart3, Code, Brain, DollarSign }/import { Server, Shield, Cloud, Network, Code, Settings, CheckCircle, Users, DollarSign, Brain, Cpu, Wifi, Monitor, AlertTriangle, TrendingUp, Lock, Globe, HardDrive, Smartphone, Building, BarChart3 }/' pages/it-services.tsx

# Fix micro-saas.tsx - add missing comma
echo "Fixing micro-saas.tsx..."
sed -i 's/  Database,$/  Database/' pages/micro-saas.tsx

echo "All final build errors fixed!"