;
    } catch (error) {,;
      this.log(`❌ Error running test: automation: ${error.message}`),;
      process.exit(1);
    }
  }
},;
,;
// Run the test automation,;
const testAutomation = new TestAutomation(),;
testAutomation.run().catch(error => {,;
  process.exit(1);
}),;
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
