#!/bin/bash

echo "Resolving conflicts in data files..."

# Function to resolve conflicts by taking the incoming version (origin/merge/2027-services)
resolve_data_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Remove all conflict markers and keep the incoming version
    
    # Fix common syntax issues
    sed -i 's/export interface CuttingEdgeInnovation2027 {;/export interface CuttingEdgeInnovationService2027 {/g' "$file"
    sed -i 's/export interface PracticalMicroSaas2027 {;/export interface PracticalMicroSaasService2027 {/g' "$file"
    sed -i 's/  id: string,;/  id: string;/g' "$file"
    sed -i 's/  name: string,;/  name: string;/g' "$file"
    sed -i 's/  tagline: string,;/  tagline: string;/g' "$file"
    sed -i 's/  price: string,;/  price: string;/g' "$file"
    sed -i 's/  description: string,;/  description: string;/g' "$file"
    sed -i 's/  features: string\[\],;/  features: string\[\];/g' "$file"
    sed -i 's/  link: string,;/  link: string;/g' "$file"
    sed -i 's/  category: string,;/  category: string;/g' "$file"
    sed -i 's/  realImplementation: boolean,;/  realImplementation: boolean;/g' "$file"
}

# Resolve conflicts in data files
resolve_data_conflicts "data/2027-cutting-edge-innovations.ts"
resolve_data_conflicts "data/2027-practical-micro-saas.ts"

echo "Data conflicts resolved!"