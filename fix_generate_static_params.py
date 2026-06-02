#!/usr/bin/env python3
import re

with open('/Users/klebergarciaalcatrao/app/services/[id]/page.tsx', 'r') as f:
    content = f.read()

# Define the old function and the new function.
old_function = '''export async function generateStaticParams() {
  // Only statically generate the top 20 most important/popular services
  const sorted = [...allServices].sort((a, b) => {
    const scoreA = (a.features?.length || 0) * 3 + (a.benefits?.length || 0) * 2 + (a.popular ? 50 : 0);
    const scoreB = (b.features?.length || 0) * 3 + (b.benefits?.length || 0) * 2 + (b.popular ? 50 : 0);
    return scoreB - scoreA;
  });
  const top = sorted.slice(0, 20);
  const params: { id: string }[] = [];
  for (const service of top) {
    params.push({ id: service.id });
    if (service.id.includes('_')) {
      params.push({ id: service.id.replace(/_/g, '-') });
    }
  }
  return params;
}'''

new_function = '''export async function generateStaticParams() {
  const params: { id: string }[] = [];
  for (const service of allServices) {
    params.push({ id: service.id });
    if (service.id.includes('_')) {
      params.push({ id: service.id.replace(/_/g, '-') });
    }
  }
  return params;
}'''

# Replace the old function with the new function.
content = content.replace(old_function, new_function)

with open('/Users/klebergarciaalcatrao/app/services/[id]/page.tsx', 'w') as f:
    f.write(content)

print("Replaced generateStaticParams function to generate for all services.")