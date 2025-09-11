#!/usr/bin/env python3

import requests
import json
import time

# Configuration
TOKEN = "ghs_2CijlF4cOrlTIwzwz3nvWrTnWL9uZC0Q24TL"
REPO = "Zion-Holdings/zion.app"
BASE_URL = "https://api.github.com"

headers = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def merge_pr(pr_number):
    """Merge a specific PR"""
    url = f"{BASE_URL}/repos/{REPO}/pulls/{pr_number}/merge"
    data = {
        "commit_title": f"Merge PR #{pr_number}",
        "merge_method": "merge"
    }
    
    try:
        response = requests.put(url, headers=headers, json=data, timeout=30)
        result = response.json()
        
        if response.status_code == 200 and result.get("merged"):
            print(f"✅ PR #{pr_number} merged successfully")
            return True
        else:
            print(f"❌ PR #{pr_number} merge failed: {result.get('message', 'Unknown error')}")
            return False
    except Exception as e:
        print(f"❌ Error merging PR #{pr_number}: {e}")
        return False

def main():
    print("🚀 Starting simple PR merge...")
    
    # Known PRs to merge
    prs_to_merge = [12994, 12993]
    
    results = []
    for pr_num in prs_to_merge:
        print(f"\n🔄 Processing PR #{pr_num}")
        success = merge_pr(pr_num)
        results.append({"pr": pr_num, "success": success})
        time.sleep(2)  # Brief pause
    
    print("\n📊 Summary:")
    successful = sum(1 for r in results if r["success"])
    print(f"Successfully merged {successful}/{len(results)} PRs")
    
    # Save results
    with open("/workspace/merge_results.json", "w") as f:
        json.dump({
            "timestamp": time.time(),
            "results": results,
            "total": len(results),
            "successful": successful
        }, f, indent=2)
    
    print("✅ Process completed")

if __name__ == "__main__":
    main()